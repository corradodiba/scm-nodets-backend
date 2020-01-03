import { Request, Response } from "express";
import {
  getAll,
  getById,
  Courses,
  add,
  edit,
  deleteById,
  addSubjectIntoCourse as addSubject
} from "../../models/courses/courses.model";
import { IToken } from "../../interfaces/token.interface";
import { Subject, CreateSubject } from "../../models/subject/subject.model";

export const getAllCourses = async (req: Request | any, res: Response) => {
  try {
    const courses = await getAll();
    return res.status(200).json(courses);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getCourseById = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.params;
    const { _id, type } = req.userData;
    const result = await getById(type, _id, id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addCourse = async (req: Request | any, res: Response) => {
  try {
    const { name, status, year } = req.body;
    const token: IToken = req.userData;
    const result: Courses = await add(name, status, year, token);

    return res.status(201).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addSubjectIntoCourse = async (
  req: Request | any,
  res: Response
) => {
  try {
    const { name, hours } = req.body;
    const { id } = req.params;
    if (!id) {
      throw "Course id not found!";
    }
    const addedSubject = await addSubject(id, name, hours);

    return res.status(201).json(addedSubject);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const editCourseById = async (req: Request | any, res: Response) => {
  try {
    const { name, status, year } = req.body;
    const token: IToken = req.userData;
    const course = { name, status, year };
    const result: Courses = await edit(req.params.id, course as Courses, token);
    return res.status(200).json({
      message: "Course successfully edited!",
      before: result,
      after: { year }
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteCourseById = async (req: Request | any, res: Response) => {
  try {
    const { id } = req.params;
    const token: IToken = req.userData;
    const result: Courses = await deleteById(id, token);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
