import mongoose, { Document, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const SubjectSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  hours: {
    type: String,
    default: undefined
  }
});

SubjectSchema.plugin(uniqueValidator);

export interface Subject extends Document {
  name: string;
  hours: number;
}

export const SubjectModel = mongoose.model<Subject>("Subject", SubjectSchema);

export { getAll, getById, add, edit, deleteById } from "./subject.methods";

export { CreateSubject } from "./subject.costructor";
