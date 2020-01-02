import { Grades, GradesModel } from "./grades.model";

interface CreateGradesInput {
  grade: Grades["grade"];
  //student: Grades["student"];
  subject: Grades["subject"];
  user: Grades["user"];
}

export const CreateGrade = ({
  grade,
  //student,
  subject,
  user
}: CreateGradesInput): Grades => {
  try {
    return new GradesModel({
      grade,
      //student,
      subject,
      user
    });
  } catch (err) {
    throw err;
  }
};
