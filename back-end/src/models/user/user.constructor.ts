import { User, UserModel } from "./user.model";

interface CreateUserInput {
  email: User["email"];
  hashedPassword: User["password"];
  fiscalCode: User["fiscalCode"];
  name: User["name"];
  surname: User["surname"];
  dateOfBirth: User["dateOfBirth"];
  subjects?: User["subjects"];
  imagePath: User["imagePath"];
}

export const CreateUser = ({
  email,
  hashedPassword,
  fiscalCode,
  name,
  surname,
  dateOfBirth,
  subjects,
  imagePath
}: CreateUserInput): User => {
  try {
    return new UserModel({
      email,
      password: hashedPassword,
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects,
      imagePath
    });
  } catch (err) {
    throw err;
  }
};
