import { Request, Response } from "express";
import { getAll, Courses, add } from "../../models/courses/courses.model";
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
