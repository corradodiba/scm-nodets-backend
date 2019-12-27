import mongoose, { Document, Schema } from "mongoose";
import { User } from "../user/user.model";

const CoursesSchema: Schema = new Schema({
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
  ]
});

export interface Courses extends Document {
  year: Date;
  students?: User["_id"];
  teachers?: User["_id"];
}

export const CoursesModel = mongoose.model<Courses>("Courses", CoursesSchema);

export { getAll, add, deleteById, edit } from "./courses.methods";

export { CreateCourse } from "./courses.costructor";
