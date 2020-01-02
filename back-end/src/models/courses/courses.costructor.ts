import { Courses, CoursesModel } from "./courses.model";

interface CreateCoursesInput {
  year: Courses["year"];
}

export const CreateCourse = ({ year }: CreateCoursesInput): Courses => {
  try {
    return new CoursesModel({
      year
    });
  } catch (err) {
    throw err;
  }
};
