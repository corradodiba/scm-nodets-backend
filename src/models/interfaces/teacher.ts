import Subject from "./subject";

export default interface Student {
  _id: string;
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject[];
}
