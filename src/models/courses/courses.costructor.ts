import { Courses, CoursesModel } from "./courses.model";

interface CreateCoursesInput {
  name: Courses["name"];
  status: Courses["status"];
  year: Courses["year"];
}

export const CreateCourse = ({ name, status, year }: CreateCoursesInput): Courses => {
  try {
    return new CoursesModel({
      name,
      status,
      year
    });
  } catch (err) {
    throw err;
  }
};
