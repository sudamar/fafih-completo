import professorService from '@/features/professors/services/professorService.js';

export const professorLoader = async ({ params }) => {
  const slug = params?.slug;
  if (!slug) {
    return { professor: null, slug: null };
  }

  try {
    const professor = await professorService.getProfessorBySlug(slug);
    return { professor, slug };
  } catch (error) {
    console.warn('professorLoader: fallback to runtime hook', error);
    return { professor: null, slug };
  }
};

export default professorLoader;
