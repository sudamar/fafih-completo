import rawCourses from '../data/courses.json';
import heroVideo1 from '../assets/videos/video-curso-1.mp4';
import heroVideo2 from '../assets/videos/video-curso-2.mp4';
import heroVideo3 from '../assets/videos/video-curso-3.mp4';
import heroVideo4 from '../assets/videos/video-curso-4.mp4';
import heroVideo5 from '../assets/videos/video-curso-5.mp4';
import heroVideo6 from '../assets/videos/video-curso-6.mp4';
import heroVideo7 from '../assets/videos/video-curso-7.mp4';

const heroSourceMap = {
  '/assets/videos/video-curso-1.mp4': heroVideo1,
  '/assets/videos/video-curso-2.mp4': heroVideo2,
  '/assets/videos/video-curso-3.mp4': heroVideo3,
  '/assets/videos/video-curso-4.mp4': heroVideo4,
  '/assets/videos/video-curso-5.mp4': heroVideo5,
  '/assets/videos/video-curso-6.mp4': heroVideo6,
  '/assets/videos/video-curso-7.mp4': heroVideo7,
};

const resolveHeroSource = (source) => {
  if (!source) {
    return source;
  }

  const normalized = source.startsWith('/') ? source : `/${source}`;

  if (heroSourceMap[normalized]) {
    return heroSourceMap[normalized];
  }

  try {
    const trimmed = normalized.replace(/^\//, '');
    return new URL(`../${trimmed}`, import.meta.url).href;
  } catch (error) {
    return source;
  }
};

const normalizeHero = (course) => {
  if (!course.hero) {
    return course.hero;
  }

  const resolvedSource = resolveHeroSource(course.hero.source);

  return {
    ...course.hero,
    source: resolvedSource,
    fallbackImage: course.hero.fallbackImage || course.image,
  };
};

const cardImageOverrides = {
  'livros-negros-e-livro-vermelho': 'https://i.imgur.com/qwiCmA6.jpeg',
  'sonhando-atraves-da-arteterapia': 'https://i.imgur.com/AnnChjx.png',
  'de-aion-a-jo': 'https://i.imgur.com/REzhmRK.jpeg',
  'formacao-de-membros-analistas-junguianos': 'https://i.imgur.com/lXkjLLG.png',
  'congressos-junguianos-do-ijep': 'https://i.imgur.com/M3vP6UT.png',
};

const courses = rawCourses.map((course) => {
  const overrideImage = course.slug && cardImageOverrides[course.slug];
  return {
    ...course,
    id: course.id,
    slug: course.slug,
    image: overrideImage || course.image,
    hero: normalizeHero({ ...course, image: overrideImage || course.image }),
  };
});

const coursesById = new Map();
const coursesBySlug = new Map();

courses.forEach((course) => {
  coursesById.set(String(course.id), course);
  if (course.slug) {
    coursesBySlug.set(course.slug, course);
  }
});

export const getAllCourses = () => courses.slice();

export const getCourseById = (id) => {
  if (id === undefined || id === null) {
    return null;
  }

  return coursesById.get(String(id)) || null;
};

export const getCourseBySlug = (slug) => {
  if (!slug) {
    return null;
  }

  return coursesBySlug.get(String(slug)) || null;
};

export const getCourseDetails = (identifier, { fallback = true } = {}) => {
  const course = getCourseById(identifier) || getCourseBySlug(identifier);
  if (course) {
    return course;
  }

  if (!fallback) {
    return null;
  }

  if (courses.length === 0) {
    return null;
  }

  const first = getCourseById(1) || courses[0];
  return first || null;
};

export const listCourseCards = () =>
  courses.map((course) => ({
    id: course.id,
    category: course.category,
    categoryLabel: course.categoryLabel,
    image: course.image,
    title: course.title,
    description: course.description,
    price: course.price,
    modalidade: course.modalidade,
    slug: course.slug,
  }));

export const listCategories = () => {
  const map = new Map();

  courses.forEach((course) => {
    const key = course.category || 'outros';
    const label = course.categoryLabel || course.category || 'Outros';

    if (!map.has(key)) {
      map.set(key, { id: key, label, count: 0 });
    }

    map.get(key).count += 1;
  });

  return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
};

export const getCourseStats = () => ({
  totalCourses: courses.length,
  totalCategories: listCategories().length,
});
