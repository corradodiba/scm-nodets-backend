import { User, UserModel } from "./user.model";

interface CreateUserInput {
  fiscalCode: User["fiscalCode"];
  name: User["name"];
  surname: User["surname"];
  dateOfBirth: User["dateOfBirth"];
  subjects?: User["subjects"];
}

export const CreateUser = ({
  fiscalCode,
  name,
  surname,
  dateOfBirth,
  subjects
}: CreateUserInput): User => {
  try {
    return new UserModel({
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
