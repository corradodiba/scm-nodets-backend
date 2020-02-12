import { Course, CourseModel } from "./course.model";

interface CreateCourseInput {
  name: Course["name"];
  status: Course["status"];
  year: Course["year"];
}

export const CreateCourse = ({
  name,
  status,
  year
}: CreateCourseInput): Course => {
  try {
    return new CourseModel({
      name,
      status,
      year
    });
  } catch (err) {
    throw err;
  }
};
