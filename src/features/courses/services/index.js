/**
 * Course Services - Barrel Export
 *
 * Todos os services relacionados a cursos
 */

// Service principal de cursos (listagem, busca, filtros)
export {
  default as courseService,
  getAllCourses,
  getCourseBySlug,
  getCourseById,
  getCoursesByCategory,
  searchCourses,
  getCategories,
  getStats,
  clearCache,
  getCacheInfo
} from '@/courseService.js';

// Service de dados detalhados dos cursos (curriculum, highlights, etc.)
export {
  default as courseDetailsService,
  getCourseDetails,
  getCourseDetailsBySlug,
  getAllCourseDetails,
  getCourseDetailsByCategory,
  hasDetails,
  getCourseCurriculum,
  getCourseHighlights,
  getCourseContact,
  getCourseDetails_Legacy
} from '@/courseDetailsService.js';

// Re-export default para conveniência
export { default } from '@/courseService.js';