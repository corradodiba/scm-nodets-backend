import mongoose, { Document, Schema } from "mongoose";
import { User } from "../user/user.model";

const CourseSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    required: true
  },
  year: {
    type: Date,
    required: true
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: []
    }
  ],
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: []
    }
  ],
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      default: []
    }
  ]
});

export interface Course extends Document {
  name: String;
  status: String;
  year: Date;
  students?: User["_id"];
  teachers?: User["_id"];
  subjects?: User["_id"];
}

export const CourseModel = mongoose.model<Course>("Course", CourseSchema);

export {
  getAll,
  getById,
  add,
  addSubjectIntoCourse,
  deleteById,
  edit
} from "./course.methods";

export { CreateCourse } from "./course.costructor";
