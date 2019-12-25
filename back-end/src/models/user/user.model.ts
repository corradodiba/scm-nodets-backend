import mongoose, { Schema, Document } from "mongoose";
import { Subject } from "../subject/subject.model";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  fiscalCode: {
    type: String,
    required: true,
    unique: true,
    maxlength: 16,
    minlength: 16
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      default: []
    }
  ]
});

export interface User extends Document {
  email: string;
  password: string;
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
