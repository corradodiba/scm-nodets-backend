import mongoose, { Document, Schema } from "mongoose";
//import { Student } from "../student/student.model";
import { Subject } from "../subject/subject.model";
import { User } from "../user/user.model";

const GradesSchema: Schema = new Schema({
  grade: {
    type: Number,
    required: true,
    minlength: 0,
    maxlength: 10
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

export interface Grades extends Document {
  grade: Number;
  subject: Subject["_id"];
  user: User["_id"];
}

export const GradesModel = mongoose.model<Grades>("Grades", GradesSchema);

export { getAll, getById, add, deleteById, editGrade } from "./grades.methods";

export { CreateGrade } from "./grades.costructor";
