import { Course, CourseModel, CreateCourse } from "./course.model";

import { IToken } from "../../interfaces/token.interface";
import {
  SubjectModel,
  add as addSubject,
  CreateSubject
} from "../subject/subject.model";

export const getAll = async () => {
  try {
    const courses: Course[] = await CourseModel.find().populate(
      "teachers students subjects"
    );
    return courses;
  } catch (err) {
    throw err;
  }
};

export const getById = async (_id: String) => {
  try {
    const course = await CourseModel.findOne({ _id }).populate(
      "teachers students subjects"
    );
    if (!course) {
      throw "course not found";
    }
    return course;
  } catch (err) {
    throw err;
  }
};

export const add = async (
  name: String,
  status: String,
  year: Date
): Promise<Course> => {
  try {
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
    let subject = await SubjectModel.findOne({ name });

    if (!subject) {
      subject = await addSubject(name, hours);
    }

    const courseAfterUpdating: Course = await updateSubjects(_id, subject._id);
    return courseAfterUpdating;
  } catch (err) {
    throw err;
  }
};

const updateSubjects = async (_id: string, subjectId: string) => {
  const course = await CourseModel.findOneAndUpdate(
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

  if (!course) {
    throw "course not found";
  }
  return course;
};

export const edit = async (_id: string, course: Course): Promise<Course> => {
  for (let field in course)
    if (!(course as any)[field]) delete (course as any)[field];
  try {
    const editedCourse = await CourseModel.findOneAndUpdate(
      { _id },
      { $set: course },
      {
        new: true
      }
    ).populate("subjects students teachers");
    if (!editedCourse) {
      throw "No course found for editing!";
    }
    return editedCourse;
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (_id: string): Promise<Course> => {
  try {
    const deletedCourse = await CourseModel.findByIdAndRemove({
      _id
    }).populate("subjects students teachers");
    if (!deletedCourse) {
      throw "No courses found for deletion!";
    }
    return deletedCourse;
  } catch (err) {
    throw err;
  }
};
