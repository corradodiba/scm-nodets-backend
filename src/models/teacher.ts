import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import personSchema from "./helpers/person.schema";

const teacherSchema = new Schema({
  ...personSchema,
  subjects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Subject"
  }
});

teacherSchema.plugin(uniqueValidator);

export const TeacherModel = mongoose.model("Teacher", teacherSchema);
