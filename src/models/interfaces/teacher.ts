import Subject from "./subject";
// It was Student, I think by mistake, now it's Teacher
export default interface Teacher {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject[];
}
