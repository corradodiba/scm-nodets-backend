import User from "./user.model";

export default interface Course {
  _id: string;
  name: string;
  year: number;
  status: string;
  students: User[];
  teachers: User[];
}
