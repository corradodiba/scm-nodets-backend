import { Request, Response } from "express";
import { getAll, getById, Courses, add, edit, deleteById } from "../../models/courses/courses.model";
import { IToken } from "../../interfaces/token.interface";

export const getAllCourses = async (req: Request | any, res: Response) => {
  try {
    const { _id, type } = req.userData;
    const result = await getAll(type, _id);
    return res.status(200).json(result);
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
    const { year } = req.body;
    const token: IToken = req.userData;
    const result: Courses = await add(year, token);

    return res.status(201).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const editCourseById = async (req: Request | any, res: Response) => {
  try {
    const { year } = req.body;
    const token: IToken = req.userData;
    const course = { year };
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