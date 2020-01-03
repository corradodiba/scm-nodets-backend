import { Courses } from "../models/courses/courses.model";
import { getYearOfDate } from "./getDateToString.helper";

export const mapCourseData = (course: Courses) => {
  const { _id, name, status, year, students, teachers } = course;
  return {
    _id,
    name,
    status,
    year: getYearOfDate(year),
    students,
    teachers
  };
};

export const mapCoursesData = (courses: Courses[]) => {
  return courses.map((course) => {
    return mapCourseData(course);
  });
};
