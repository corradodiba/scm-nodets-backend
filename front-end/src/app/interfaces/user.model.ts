export default interface User {
  _id: string;
  fiscalCode: string;
  email?: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  type: string;
}
