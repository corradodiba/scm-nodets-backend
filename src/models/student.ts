import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import fiscalCodeSchema from "./helpers/person.schema";
import personSchema from "./helpers/person.schema";

const studentSchema = new Schema({
  ...personSchema
});

studentSchema.plugin(uniqueValidator);

export const StudentModel = mongoose.model("Student", studentSchema);
