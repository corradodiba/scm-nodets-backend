import mongoose, { Document, Schema } from "mongoose";
import { Student } from "../student/student.model";
import { Subject } from "../subject/subject.model";
import { Teacher } from "../teacher/teacher.model";

const GradesSchema: Schema = new Schema({
  grade: {
    type: Number,
    required: true,
    minlength: 0,
    maxlength: 10
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true
  }
});

export interface Grades extends Document {
  grade: Number;
  student: Student["_id"];
  subject: Subject["_id"];
  teacher: Teacher["_id"];
}

export const GradesModel = mongoose.model<Grades>("Grades", GradesSchema);

export { getAll, add, deleteById, editGrade } from "./grades.methods";

export { CreateGrade } from "./grades.costructor";
