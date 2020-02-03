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

import {
  mapCourseData,
  mapCoursesData
} from "../../helpers/mapCourseData.helper";

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await getAll();
    return res.status(200).json(mapCoursesData(courses));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course: Courses = await getById(id);
    return res.status(200).json(mapCourseData(course));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addCourse = async (req: Request, res: Response) => {
  try {
    // manc la validazione del body
    const { name, status, year } = req.body;
    const course: Courses = await add(name, status, year);
    return res.status(201).json(mapCourseData(course));
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};

export const addSubjectIntoCourse = async (req: Request, res: Response) => {
  try {
    // manca la validazione del body
    const { name, hours } = req.body;
    const { id } = req.params;

    const course = await addSubject(id, name, hours);

    return res.status(201).json(mapCourseData(course));
  } catch (err) {
    return res.status(409).json({ message: err });
  }
};

export const editCourseById = async (req: Request, res: Response) => {
  try {
    // manca la validazione del body
    const { name, status, year } = req.body;
    const course = { name, status, year };
    const editedCourse: Courses = await edit(req.params.id, course as Courses);
    return res.status(200).json(mapCourseData(editedCourse));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCourse: Courses = await deleteById(id);

    return res.status(200).json(mapCourseData(deletedCourse));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
