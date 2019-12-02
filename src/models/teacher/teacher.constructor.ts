import { Teacher, TeacherModel } from "./teacher.model";
import { CreatePersonInput } from "../person/person.interface";

interface CreateTeacherInput extends CreatePersonInput {
  subjects?: Teacher["subjects"];
}

export const CreateTeacher = ({
  ...studentFields
}: CreateTeacherInput): Teacher => {
  try {
    return new TeacherModel({ ...studentFields });
  } catch (err) {
    throw err;
  }
};
