import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const subjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  hours: {
    type: Number,
    default: undefined
  }
});

subjectSchema.plugin(uniqueValidator);

export const SubjectModel = mongoose.model("Subject", subjectSchema);
