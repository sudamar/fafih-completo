import rawProfessors from '@/data/professors.json' with { type: 'json' };

const DEFAULT_BOOK_COVER = 'https://via.placeholder.com/120x180?text=Publica%C3%A7%C3%A3o';

const photoOverrides = {
  'waldemar-magaldi-filho': 'https://randomuser.me/api/portraits/men/10.jpg',
  'simone-magaldi': 'https://randomuser.me/api/portraits/women/15.jpg',
  'lilian-wurzba': 'https://randomuser.me/api/portraits/women/25.jpg',
  'maria-cristina-m-guarnieri': 'https://randomuser.me/api/portraits/women/30.jpg',
  'oswaldo-cudizio': 'https://randomuser.me/api/portraits/men/32.jpg',
  'ajax-perez-salvador': 'https://randomuser.me/api/portraits/men/40.jpg',
  'lia-romano': 'https://randomuser.me/api/portraits/women/44.jpg',
  'luciana-antonioli': 'https://randomuser.me/api/portraits/women/46.jpg',
  'ana-paula-z-m-maluf': 'https://randomuser.me/api/portraits/women/47.jpg',
  'dimas-a-kunsch': 'https://randomuser.me/api/portraits/men/47.jpg',
};

const fallbackPhotos = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg',
  'https://randomuser.me/api/portraits/men/5.jpg',
  'https://randomuser.me/api/portraits/women/6.jpg',
  'https://randomuser.me/api/portraits/men/7.jpg',
  'https://randomuser.me/api/portraits/women/8.jpg',
  'https://randomuser.me/api/portraits/men/9.jpg',
  'https://randomuser.me/api/portraits/women/10.jpg',
];

const createSlug = (text = '') =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const createLegacySlug = (text = '') =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '');

const toText = (value) => {
  if (!value) return '';
  if (Array.isArray(value)) {
    return value.join(' ');
  }
  return value;
};

const detectCategory = (professor) => {
  const reference = `${professor.title || ''} ${toText(professor.qualifications)}`.toLowerCase();
  if (reference.includes('doutor') || reference.includes('dr.')) {
    return 'doutor';
  }
  if (reference.includes('mestre') || reference.includes('ms.') || reference.includes('mestr')) {
    return 'mestre';
  }
  return 'especialista';
};

const detectArea = (professor) => {
  if (professor.specialties && professor.specialties.length > 0) {
    return professor.specialties[0];
  }
  if (professor.courses && professor.courses.length > 0) {
    return professor.courses[0].title;
  }
  return 'Docente FAFIH';
};

const detectFormacao = (professor) => {
  if (professor.qualifications && professor.qualifications.length > 0) {
    return professor.qualifications[0];
  }
  return professor.title || 'Professor';
};

const getPhoto = (professor, index) => {
  const keysToTry = [professor.slug, professor.legacySlug, professor.legacySlugLoose];
  for (const key of keysToTry) {
    if (key && photoOverrides[key]) {
      return photoOverrides[key];
    }
  }
  return fallbackPhotos[index % fallbackPhotos.length];
};

const toSummary = (professor, index) => ({
  id: professor.id,
  slug: professor.slug,
  legacySlug: professor.legacySlug,
  name: professor.name,
  title: professor.title,
  area: detectArea(professor),
  formacao: detectFormacao(professor),
  bio: toText(professor.bio),
  description: toText(professor.bio),
  telefone: professor.contact?.phone || '',
  email: professor.contact?.email || '',
  categoria: detectCategory(professor),
  foto: getPhoto(professor, index),
});

const toDetail = (professor, index) => ({
  id: professor.id,
  slug: professor.slug,
  legacySlug: professor.legacySlug,
  name: professor.name,
  title: professor.title,
  description: toText(professor.bio),
  phone: professor.contact?.phone || '',
  email: professor.contact?.email || '',
  address: professor.contact?.address || '',
  photo: getPhoto(professor, index),
  specialties: professor.specialties || [],
  qualifications: professor.qualifications || [],
  courses: professor.courses || [],
  books: (professor.publications || [])
    .filter((publication) => publication.type === 'book')
    .map((publication) => ({
      title: publication.title,
      thumbnail: publication.cover || DEFAULT_BOOK_COVER,
    })),
});

const professors = rawProfessors.map((professor, index) => {
  const slug = professor.slug || createSlug(professor.name);
  const legacySlug = createLegacySlug(professor.name);
  const legacySlugLoose = professor.name
    ? professor.name.toLowerCase().replace(/\s+/g, '-')
    : slug;

  return {
    ...professor,
    slug,
    legacySlug,
    legacySlugLoose,
    summary: toSummary({ ...professor, slug, legacySlug, legacySlugLoose }, index),
    detail: toDetail({ ...professor, slug, legacySlug, legacySlugLoose }, index),
  };
});

const professorsBySlug = new Map();
const professorsByLegacy = new Map();
const professorsByLooseLegacy = new Map();
const professorsById = new Map();

professors.forEach((professor) => {
  if (professor.slug) {
    professorsBySlug.set(professor.slug, professor);
  }
  if (professor.legacySlug) {
    professorsByLegacy.set(professor.legacySlug, professor);
  }
  if (professor.legacySlugLoose) {
    professorsByLooseLegacy.set(professor.legacySlugLoose, professor);
  }
  professorsById.set(String(professor.id), professor);
});

const resolveProfessor = (identifier) => {
  if (!identifier && identifier !== 0) {
    return null;
  }
  const normalized = String(identifier).toLowerCase();

  return (
    professorsBySlug.get(normalized) ||
    professorsByLegacy.get(normalized) ||
    professorsByLooseLegacy.get(normalized) ||
    professorsById.get(normalized) ||
    null
  );
};

export const listProfessorsSummary = () => professors.map((professor) => professor.summary);

export const listFacultyHighlights = (limit = 8) =>
  listProfessorsSummary().slice(0, limit);

export const getProfessorDetailView = (identifier) => {
  const professor = resolveProfessor(identifier);
  if (!professor) {
    return null;
  }
  return professor.detail;
};

export const getProfessorNameBySlug = (identifier) => {
  const professor = resolveProfessor(identifier);
  return professor ? professor.name : null;
};
