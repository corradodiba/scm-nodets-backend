import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import fiscalCodeSchema from "./helpers/person.schema";
import personSchema from "./helpers/person.schema";

const studentSchema = new Schema({
  ...personSchema
});

studentSchema.plugin(uniqueValidator);

export const StudentModel = mongoose.model("Student", studentSchema);

// insert method

export const getAll = async () => {
  try {
    const students = await StudentModel.find();
    return students === null ? new Error(`No student found!`) : students;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const add = async (stud: Student) => {
  try {
    const students = new StudentModel(stud);
    await students.save();
    return students;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const deleteStudent = async (id: string) => {
  try {
    const deleteStud = await StudentModel.findByIdAndRemove({ _id: id });
    return deleteStud === null ? new Error(`No student founded for delection!`) : deleteStud;
  } catch (err) {
    return new Error(`Error: ${err}`);

  }
};

export const modifyStudent = async (id: string, student: Student) => {
  try {
    const modifyStud = await StudentModel.findByIdAndUpdate(id, student);
    return modifyStud === null ? new Error(`No subject found for modify!`) : modifyStud;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const getStudentById = async (id: string) => {
  try {
    const getStudent = await StudentModel.findOne({ _id: id });
    return getStudent === null ? new Error(`Not student with this id(${id}) found!`) : getStudent;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export interface Student {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
}
