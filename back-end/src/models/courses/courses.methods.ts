import { Courses, CoursesModel } from "./courses.model";

import { typeUser } from "../../interfaces/typeUser.type";
import { IToken } from "../../interfaces/token.interface";
import { CreateCourse } from "./courses.costructor";
import { mapCoursesData } from "../../helpers/mapCourseData.helper";
import {
  Subject,
  SubjectModel,
  add as addSubject,
  CreateSubject
} from "../subject/subject.model";

export const getAll = async () => {
  try {
    const courses: Courses[] = await CoursesModel.find().populate(
      "teachers students subjects"
    );
    return mapCoursesData(courses);
  } catch (err) {
    throw err;
  }
};

export const getById = async (type: typeUser, userId: string, id: String) => {
  try {
    const course = await CoursesModel.findOne({ _id: id }).populate(
      "students subjects"
    );
    return course;
  } catch (err) {
    throw err;
  }
};

export const add = async (
  name: String,
  status: String,
  year: Date,
  token: IToken
): Promise<Courses> => {
  try {
    const { type } = token;
    if (type !== "Admin") {
      throw "Operation not permitted!";
    }
    const course = CreateCourse({ name, status, year });
    return await course.save();
  } catch (err) {
    throw err;
  }
};

export const addSubjectIntoCourse = async (
  _id: string,
  name: string,
  hours: number
) => {
  try {
    let subjectInstance: any = CreateSubject({ name, hours });
    let subject: Subject | null;
    if (await SubjectModel.exists({ name })) {
      subject = await SubjectModel.findOne({ name });
    } else {
      subject = await addSubject(subjectInstance);
    }
    await addedSubject(_id, subject?._id);
    return subject;
  } catch (err) {
    throw err;
  }
};

export const addedSubject = async (_id: string, subjectId: string) => {
  await CoursesModel.findOneAndUpdate(
    { _id },
    {
      $addToSet: {
        subjects: {
          $each: [subjectId]
        }
      }
    },
    { new: true }
  ).populate("subjects students teachers");
};

export const edit = async (
  id: string,
  course: Courses,
  token: IToken
): Promise<Courses> => {
  try {
    const { type } = token;
    if (type !== "Admin") {
      throw "Operation not permitted!";
    }
    const editedCourse = await CoursesModel.findByIdAndUpdate(id, course, {
      new: true
    }).populate("user");
    if (!editedCourse) {
      throw "No course found for editing!";
    }
    return editedCourse;
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (
  id: string,
  token: IToken
): Promise<Courses> => {
  try {
    const { type } = token;
    if (type !== "Admin") {
      throw "Operation not permitted!";
    }
    const deletedCourse = await CoursesModel.findByIdAndRemove({
      _id: id
    }).populate("user");
    if (!deletedCourse) {
      throw "No courses found for deletion!";
    }
    return deletedCourse;
  } catch (err) {
    throw err;
  }
};
