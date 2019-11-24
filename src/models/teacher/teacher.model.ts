import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import personSchema from "../person.schema";
import { Subject } from "../subject/subject.model";

const teacherSchema = new Schema({
  ...personSchema,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

teacherSchema.plugin(uniqueValidator);

export interface Teacher extends Document {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject[];
}

export const TeacherModel = mongoose.model<Teacher>("Teacher", teacherSchema);

export { getAll, getById, add, edit, deleteById } from "./teacher.methods";

export { CreateTeacher } from "./teacher.constructor";
