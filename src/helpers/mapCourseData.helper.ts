import { Courses } from "../models/courses/courses.model";

import { getDateToString } from "./getDateToString.helper";
import { mapSubjectsData } from "./mapSubjectData.helper";
import { mapUsersData } from "./mapUserData.helper";

export const mapCourseData = (course: Courses) => {
  const { _id, name, status, year, students, teachers, subjects } = course;
  return {
    id: _id,
    name,
    status,
    year: getDateToString(year),
    students: mapUsersData(students),
    teachers: mapUsersData(teachers),
    subjects: mapSubjectsData(subjects)
  };
};

export const mapCoursesData = (courses: Courses[]) => {
  return courses.map((course) => {
    return mapCourseData(course);
  });
};
