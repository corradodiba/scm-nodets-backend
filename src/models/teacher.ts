import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import personSchema from "./person.schema";

import { Subject } from "./subject/subject.model";

const teacherSchema = new Schema({
  ...personSchema,
  subjects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Subject"
  }
});

teacherSchema.plugin(uniqueValidator);

export const TeacherModel = mongoose.model("Teacher", teacherSchema);

export const getAll = async () => {
  try {
    const teachers = await TeacherModel.find();
    return teachers === null ? new Error("No subject found!") : teachers;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const create = async (teachDoc: Teacher) => {
  try {
    const teacher = new TeacherModel(teachDoc);
    await teacher.save();
    return teacher;
  } catch (err) {
    return new Error(err + " Impossible to save teacher!");
  }
};

export const getTeacherById = async (id: string) => {
  try {
    const teacher = await TeacherModel.findOne({ _id: id });
    return teacher === null
      ? new Error(`No teacher with this id(${id}) found!`)
      : teacher;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const getSubjectsByTeacherId = async (teacher: Teacher) => {
  try {
  } catch (error) {}
};

export const deleteTeacherById = async (id: string) => {
  try {
    const teacherToDelete = await TeacherModel.findByIdAndRemove({ _id: id });
    return teacherToDelete === null
      ? new Error("No teacher found for deletion!")
      : teacherToDelete;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const updateTeacherById = async (id: string, teacher: Teacher) => {
  try {
    const updatedTeacher = TeacherModel.findByIdAndUpdate(id, teacher);
    return updatedTeacher === null
      ? new Error("No teacher found for editing!")
      : updatedTeacher;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

// It was Student, I think by mistake, now it's Teacher
export interface Teacher {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  subjects?: Subject[];
}
