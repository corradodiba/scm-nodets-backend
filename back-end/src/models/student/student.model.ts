import mongoose, { Document, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import personSchema from "../person.schema";

const StudentSchema: Schema = new Schema({
  ...personSchema
});

StudentSchema.plugin(uniqueValidator);

export interface Student extends Document {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
}

export const StudentModel = mongoose.model<Student>("Student", StudentSchema);

export { getAll, getById, add, edit, deleteById } from "./student.methods";

export { CreateStudent } from "./student.costructor";
