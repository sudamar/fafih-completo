import courseService from '@/features/courses/services/courseService.js';

export const courseDetailsLoader = async ({ params }) => {
  const slug = params?.slug;
  if (!slug) {
    return { course: null, slug: null };
  }

  try {
    const course = await courseService.getCourseBySlug(slug);
    return { course, slug };
  } catch (error) {
    console.warn('courseDetailsLoader: fallback to runtime hook', error);
    return { course: null, slug };
  }
};

export default courseDetailsLoader;
