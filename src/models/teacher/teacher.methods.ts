import { TeacherModel, Teacher } from "./teacher.model";
import { Types } from "mongoose";
import { SubjectModel } from "../subject/subject.model";

export const getAll = async () => {
  try {
    const teachers = await TeacherModel.find().populate("subjects");
    if (!teachers) {
      throw "No subject found!";
    }
    return teachers;
  } catch (err) {
    throw err;
  }
};

export const getById = async (id: string) => {
  try {
    const teacher = await TeacherModel.findOne({ _id: id }).populate(
      "subjects"
    );
    if (!teacher) {
      throw `No teacher with this id(${id}) found!`;
    }
    return teacher;
  } catch (err) {
    throw err;
  }
};

export const add = async (teacher: Teacher) => {
  try {
    return await teacher.save();
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (id: string) => {
  try {
    const teacherToDelete = await TeacherModel.findByIdAndRemove({
      _id: id
    }).populate("subjects");
    if (!teacherToDelete) {
      throw "No teacher found for deletion!";
    }
    return teacherToDelete;
  } catch (err) {
    throw err;
  }
};

export const edit = async (id: string, teacher: Teacher): Promise<Teacher> => {
  try {
    const updatedTeacher = await TeacherModel.findByIdAndUpdate(id, {
      teacher
    }).populate("subjects");
    if (!updatedTeacher || updatedTeacher instanceof Error) {
      throw "No teacher found for editing!";
    }
    return updatedTeacher;
  } catch (err) {
    throw err;
  }
};

export const addSubject = async (id: string, subject: Types.ObjectId[]) => {
  try {
    const teacher = await TeacherModel.findOneAndUpdate(
      { _id: id },
      {
        $addToSet: {
          subjects: {
            $each: subject
          }
        }
      },
      { new: true }
    ).populate("subjects");
    if (!teacher) {
      throw "Impossible to update subjects teacher";
    }
    return teacher;
  } catch (err) {
    throw err;
  }
};
