import mongoose, { Schema, Document } from "mongoose";

import personSchema from "../person.schema";
import { Subject } from "../subject/subject.model";

const teacherSchema = new Schema({
  ...personSchema,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      default: []
    }
  ]
});

export interface Teacher extends Document {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject["_id"][];
}

export const TeacherModel = mongoose.model<Teacher>("Teacher", teacherSchema);

export {
  getAll,
  getById,
  getSubjects,
  add,
  addSubject,
  edit,
  deleteById,
  deleteSubjects
} from "./teacher.methods";

export { CreateTeacher } from "./teacher.constructor";
