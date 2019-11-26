import { SubjectModel, Subject } from "./subject.model";

export const getAll = async (): Promise<Subject[]> => {
  try {
    const subjects = await SubjectModel.find();
    if (!subjects) {
      throw "No subject found!";
    }
    return subjects;
  } catch (err) {
    throw err;
  }
};

export const getById = async (id: string): Promise<Subject> => {
  try {
    const subject = await SubjectModel.findOne({ _id: id });
    if (!subject) {
      throw `No subject with this id(${id}) found!`;
    }
    return subject;
  } catch (err) {
    throw err;
  }
};

export const add = async (subj: Subject): Promise<Subject> => {
  try {
    return await subj.save();
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (id: string): Promise<Subject> => {
  try {
    const deletedSubj = await SubjectModel.findByIdAndRemove({ _id: id });
    if (!deletedSubj) {
      throw "No subject found for deletion!";
    }
    return deletedSubj;
  } catch (err) {
    throw err;
  }
};

export const edit = async (id: string, subject: Subject): Promise<Subject> => {
  try {
    const editedSubject = await SubjectModel.findByIdAndUpdate(id, subject);
    if (!editedSubject) {
      throw "No subject found for editing!";
    }
    return editedSubject;
  } catch (err) {
    throw err;
  }
};
