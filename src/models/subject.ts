import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import Subject from "./interfaces/subject";

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

export const getAll = async () => {
  try {
    const subjects = await SubjectModel.find();
    return subjects === null ? new Error("No subject found!") : subjects;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const getById = async (id: string) => {
  try {
    const subject = await SubjectModel.findOne({ _id: id });
    return subject === null
      ? new Error(`No subject with this id(${id}) found!`)
      : subject;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const deleteOneById = async (id: string) => {
  try {
    const deletedSubj = await SubjectModel.deleteOne({ _id: id });
    return deletedSubj === null
      ? new Error("No subject found for deletion!")
      : deletedSubj;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};

export const add = async (subj: Subject) => {
  try {
    const subject = new SubjectModel(subj);
    await subject.save();
    return subject;
  } catch (err) {
    return new Error(err + " Impossible to save subject!");
  }
};

export const edit = async (id: string, subject: Subject) => {
  try {
    const editedSubject = SubjectModel.findByIdAndUpdate(id, subject);
    return editedSubject === null
      ? new Error("No subject found for editing!")
      : editedSubject;
  } catch (err) {
    return new Error(`Error: ${err}`);
  }
};
