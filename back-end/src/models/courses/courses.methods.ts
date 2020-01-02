import { Courses, CoursesModel } from "./courses.model";

import { typeUser } from "../../interfaces/typeUser.type";
import { IToken } from "../../interfaces/token.interface";
import { CreateCourse } from "./courses.costructor";

export const getAll = async (type: typeUser, userId: string) => {
  try {
    if (type === "Admin") {
      const courses: Courses[] = await CoursesModel.find().populate(
        "students subjects"
      );
      return courses;
    }

    if (type === "Teacher") {
      const courses: Courses[] = await CoursesModel.find({
        teachers: {
          $in: [
            {
              _id: userId,
              type
            }
          ]
        }
      });
      return courses;
    }

    if (type === "Student") {
      const courses: Courses[] = await CoursesModel.find({
        students: {
          $in: [
            {
              _id: userId,
              type
            }
          ]
        }
      });
      return courses;
    }
  } catch (err) {
    throw err;
  }
};

export const getById = async (type: typeUser, userId: string, id: String) => {
  try {
    if (type === "Admin") {
      const course = await CoursesModel.findOne({ _id: id }).populate(
        "students subjects"
      );
      return course;
    }

    if (type === "Teacher") {
      const courses = await CoursesModel.findOne({
        _id: id,
        teachers: {
          $in: [
            {
              _id: userId,
              type
            }
          ]
        }
      });
      return courses;
    }

    if (type === "Student") {
      const courses = await CoursesModel.findOne({
        _id: id,
        students: {
          $in: [
            {
              _id: userId,
              type
            }
          ]
        }
      });
      return courses;
    }
  } catch (err) {
    throw err;
  }
};

export const add = async (year: Date, token: IToken): Promise<Courses> => {
  try {
    const { type } = token;
    if (type !== "Admin") {
      throw "Operation not permitted!";
    }
    const course = CreateCourse({ year });
    return await course.save();
  } catch (err) {
    throw err;
  }
};

export const edit = async (id: string, course: Courses, token: IToken): Promise<Courses> => {
  try {
    const { type } = token;
    if (type !== "Admin") {
      throw "Operation not permitted!";
    }
    const editedCourse = await CoursesModel.findByIdAndUpdate(id, course).populate("user");;
    if (!editedCourse) {
      throw "No course found for editing!";
    }
    return editedCourse;
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (id: string, token: IToken): Promise<Courses> => {
  try {
    const { type } = token;
    if (type !== "Admin") {
      throw "Operation not permitted!";
    }
    const deletedCourse = await CoursesModel.findByIdAndRemove({ _id: id }).populate("user");;
    if (!deletedCourse) {
      throw "No courses found for deletion!";
    }
    return deletedCourse;
  } catch (err) {
    throw err;
  }
};