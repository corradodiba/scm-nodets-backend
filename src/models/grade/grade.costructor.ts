import { Grade, GradeModel } from "./grade.model";

interface CreateGradeInput {
  grade: Grade["grade"];
  subject: Grade["subject"];
  user: Grade["user"];
}

export const CreateGrade = ({
  grade,
  subject,
  user
}: CreateGradeInput): Grade => {
  try {
    return new GradeModel({
      grade,

      subject,
      user
    });
  } catch (err) {
    throw err;
  }
};
