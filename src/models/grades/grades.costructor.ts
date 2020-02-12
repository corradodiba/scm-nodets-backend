import { Grades, GradesModel } from "./grades.model";

interface CreateGradesInput {
  grade: Grades["grade"];
  subject: Grades["subject"];
  user: Grades["user"];
}

export const CreateGrade = ({
  grade,
  subject,
  user
}: CreateGradesInput): Grades => {
  try {
    return new GradesModel({
      grade,

      subject,
      user
    });
  } catch (err) {
    throw err;
  }
};
