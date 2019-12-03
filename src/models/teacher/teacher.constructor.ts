import { hashedPwd } from "../../helpers/hashPwd.helper";

import { Teacher, TeacherModel } from "./teacher.model";
import { CreatePersonInput } from "../person/person.interface";

interface CreateTeacherInput extends CreatePersonInput {
  subjects?: Teacher["subjects"];
}

export const CreateTeacher = async ({
  ...studentFields
}: CreateTeacherInput): Promise<Teacher> => {
  try {
    if (!studentFields.password) {
      throw "Password missing";
    }
    const hashPwd = await hashedPwd(studentFields.password);
    return new TeacherModel({
      ...studentFields,
      password: hashPwd
    });
  } catch (err) {
    throw err;
  }
};
