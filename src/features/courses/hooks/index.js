/**
 * Course Hooks - Barrel Export
 *
 * Centraliza exportações de todos os hooks relacionados a cursos
 */

export { default as useCourses, useCourses } from './useCourses.js';
export { default as useCourse, useCourse } from './useCourse.js';

// Exportações nomeadas para conveniência
export {
  useCourses as useCoursesHook,
  useCourse as useCourseHook
} from './useCourses.js';

console.log('📦 Course hooks exported');