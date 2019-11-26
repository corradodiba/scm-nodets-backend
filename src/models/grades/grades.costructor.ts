import { Grades, GradesModel } from "./grades.model";

interface CreateGradesInput {
  grade: Grades["grade"];
  student: Grades["student"];
  subject: Grades["subject"];
  teacher: Grades["teacher"];
}

export const CreateGrade = ({
  grade,
  student,
  subject,
  teacher
}: CreateGradesInput): Grades => {
  try {
    return new GradesModel({
      grade,
      student,
      subject,
      teacher
    });
  } catch (err) {
    throw err;
  }
};
