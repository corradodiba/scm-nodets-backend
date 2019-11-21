import Subject from "./subject";

export default interface Student {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject[];
}
