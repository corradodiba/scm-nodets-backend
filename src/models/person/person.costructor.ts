import { Person } from "./person.interface";

export interface CreatePersonInput {
  fiscalCode: Person["fiscalCode"];
  name: Person["name"];
  surname: Person["surname"];
  dateOfBirth: Person["dateOfBirth"];
  email: Person["email"];
  password: Person["password"];
}
