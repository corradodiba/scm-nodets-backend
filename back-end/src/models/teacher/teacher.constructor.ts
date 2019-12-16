import { Teacher, TeacherModel } from "./teacher.model";

interface CreateTeacherInput {
  fiscalCode: Teacher["fiscalCode"];
  name: Teacher["name"];
  surname: Teacher["surname"];
  dateOfBirth: Teacher["dateOfBirth"];
  subjects?: Teacher["subjects"];
}

export const CreateTeacher = ({
  fiscalCode,
  name,
  surname,
  dateOfBirth,
  subjects
}: CreateTeacherInput): Teacher => {
  try {
    return new TeacherModel({
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    });
  } catch (err) {
    throw err;
  }
};
