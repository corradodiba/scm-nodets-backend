import { SubjectModel, Subject, CreateSubject } from "./subject.model";

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

export const getById = async (_id: string): Promise<Subject> => {
  try {
    const subject = await SubjectModel.findOne({ _id });
    if (!subject) {
      throw `No subject with this id(${_id}) found!`;
    }
    return subject;
  } catch (err) {
    throw err;
  }
};

export const add = async (name: string, hours: number): Promise<Subject> => {
  try {
    const subject = CreateSubject({ name, hours });
    return await subject.save();
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

export const edit = async (_id: string, subject: Subject): Promise<Subject> => {
  try {
    for (let field in subject)
      if (!(subject as any)[field]) delete (subject as any)[field];

    const editedSubject = await SubjectModel.findOneAndUpdate(
      { _id },
      { $set: subject },
      {
        new: true
      }
    );
    if (!editedSubject) {
      throw "No subject found for editing!";
    }
    return editedSubject;
  } catch (err) {
    throw err;
  }
};
