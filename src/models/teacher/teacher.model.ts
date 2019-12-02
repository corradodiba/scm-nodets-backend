import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import { Person, schema } from "../person/person.interface";
import { Subject } from "../subject/subject.model";

const TeacherSchema = new Schema({
  ...schema,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      default: []
    }
  ]
});

TeacherSchema.plugin(uniqueValidator);

export interface Teacher extends Person {
  subjects?: Subject["_id"][];
}

export const TeacherModel = mongoose.model<Teacher>("Teacher", TeacherSchema);

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
