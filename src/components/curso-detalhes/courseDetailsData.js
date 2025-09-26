import {
  getAllCourses,
  getCourseDetails as catalogCourseDetails,
} from '../../services/courseCatalog.js';

export const courseDetailsMap = Object.fromEntries(
  getAllCourses().map((course) => [String(course.id), course])
);

export const getCourseDetails = (courseId, options) => {
  return catalogCourseDetails(courseId, options);
};
