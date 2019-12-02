import { CreatePersonInput } from "../person/person.interface";

import { Student, StudentModel } from "./student.model";

interface CreateStudentInput extends CreatePersonInput {}

export const CreateStudent = ({
  ...studentFields
}: CreateStudentInput): Student => {
  try {
    return new StudentModel({ ...studentFields });
  } catch (err) {
    throw err;
  }
};
