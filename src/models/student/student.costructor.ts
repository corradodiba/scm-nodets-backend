import { Student, StudentModel } from "./student.model";

interface CreateStudentInput {
  fiscalCode: Student["fiscalCode"];
  name: Student["name"];
  surname: Student["surname"];
  dateOfBirth: Student["dateOfBirth"];
}

export const CreateStudent = ({
  fiscalCode,
  name,
  surname,
  dateOfBirth
}: CreateStudentInput): Student => {
  try {
    return new StudentModel({
      fiscalCode,
      name,
      surname,
      dateOfBirth
    });
  } catch (err) {
    throw err;
  }
};
