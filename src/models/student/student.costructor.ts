import { hashedPwd } from "../../helpers/hashPwd.helper";

import { CreatePersonInput } from "../person/person.interface";

import { Student, StudentModel } from "./student.model";

interface CreateStudentInput extends CreatePersonInput {}

export const CreateStudent = async ({
  ...studentFields
}: CreateStudentInput): Promise<Student> => {
  try {
    if (!studentFields.password) {
      throw "Password missing";
    }
    const hashPwd = await hashedPwd(studentFields.password);
    return new StudentModel({
      ...studentFields,
      password: hashPwd
    });
  } catch (err) {
    throw err;
  }
};
