import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import fiscalCodeSchema from "./helpers/person.schema";
import personSchema from "./helpers/person.schema";
import Student from "./interfaces/student";

const studentSchema = new Schema({
  ...personSchema
});

studentSchema.plugin(uniqueValidator);

export const StudentModel = mongoose.model("Student", studentSchema);

// insert method

export const getAll = async () => {
  try {
    const students = await StudentModel.find();
    return students === null ? new Error("No student found!") : students;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
}

export const add = async (stud: Student) => {
  try {
    const students = new StudentModel(stud);
    await students.save();
    return students;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
}