import mongoose, { Schema, Document } from "mongoose";
import personSchema from "../person.schema";
import { Subject } from "../subject/subject.model";

const userSchema = new Schema({
  ...personSchema,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      default: []
    }
  ]
});

export interface User extends Document {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject["_id"][];
}

export const UserModel = mongoose.model<User>("User", userSchema);

export {
  getAll,
  getById,
  getSubjects,
  add,
  addSubject,
  edit,
  deleteById,
  deleteSubjects
} from "./user.methods";

export { CreateUser } from "./user.constructor";
