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
  ],
  imagePath: {
    type: String
  },
  type: {
    type: String,
    enum: ["Admin", "Student", "Teacher"],
    required: true,
    index: true
  }
});

export interface User extends Document {
  email: string;
  password: string;
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject["_id"][];
  imagePath: String;
  type: "Admin" | "Student" | "Teacher";
}

export const UserModel = mongoose.model<User>("User", userSchema);

export {
  getAll,
  getByType,
  getById,
  getSubjects,
  add,
  addSubject,
  edit,
  deleteById,
  deleteSubjects
} from "./user.methods";

export { CreateUser } from "./user.constructor";
