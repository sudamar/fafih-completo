// Data Barrel Export
import coursesData from './courses.json';
import professorsData from './professors.json';

export const courses = coursesData;
export const professors = professorsData;

// Re-export for convenience
export default {
  courses,
  professors
};