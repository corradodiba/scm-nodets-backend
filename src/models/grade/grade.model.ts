import mongoose, { Document, Schema } from "mongoose";
//import { Student } from "../student/student.model";
import { Subject } from "../subject/subject.model";
import { User } from "../user/user.model";

const GradeSchema: Schema = new Schema({
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

export interface Grade extends Document {
  grade: Number;
  subject: Subject["_id"];
  user: User["_id"];
}

export const GradeModel = mongoose.model<Grade>("Grade", GradeSchema);

export { getAll, getById, add, deleteById, editGrade } from "./grade.methods";

export { CreateGrade } from "./grade.costructor";
