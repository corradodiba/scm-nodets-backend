import { StudentModel, Student } from "./student.model";

export const getAll = async (): Promise<Student[]> => {
  try {
    const students = await StudentModel.find();
    if (!students) {
      throw `No students found!`;
    }
    return students;
  } catch (err) {
    throw err;
  }
};

export const getById = async (id: string): Promise<Student> => {
  try {
    const student = await StudentModel.findOne({ _id: id });
    if (!student) {
      throw `Not student with this id(${id}) found!`;
    }
    return student;
  } catch (err) {
    throw err;
  }
};

export const add = async (stud: Student): Promise<Student> => {
  try {
    return await stud.save();
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (id: string): Promise<Student> => {
  try {
    const deletedStud = await StudentModel.findByIdAndRemove({ _id: id });
    if (!deletedStud) {
      throw `No student founded for delection!`;
    }
    return deletedStud;
  } catch (err) {
    throw err;
  }
};

export const edit = async (id: string, student: Student): Promise<Student> => {
  try {
    const stud = await StudentModel.findByIdAndUpdate(id, student);
    if (!stud) {
      throw `No subject found for edited!`;
    }
    return stud;
  } catch (err) {
    throw err;
  }
};
