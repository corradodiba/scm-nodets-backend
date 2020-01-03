import mongoose, { Document, Schema } from "mongoose";
import { User } from "../user/user.model";

const CoursesSchema: Schema = new Schema({
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

export interface Courses extends Document {
  name: String;
  status: String;
  year: Date;
  students?: User["_id"];
  teachers?: User["_id"];
  subjects?: User["_id"];
}

export const CoursesModel = mongoose.model<Courses>("Courses", CoursesSchema);

export {
  getAll,
  getById,
  add,
  addSubjectIntoCourse,
  deleteById,
  edit
} from "./courses.methods";

export { CreateCourse } from "./courses.costructor";
