import { Request, Response } from "express";

import {
  getAll,
  getById,
  Course,
  add,
  edit,
  deleteById,
  addSubjectIntoCourse as addSubject
} from "../../models/course/course.model";

import {
  mapCourseData,
  mapCoursesData
} from "../../helpers/mapCourseData.helper";

import { validationResult } from "express-validator";

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
    const course: Course = await getById(id);
    return res.status(200).json(mapCourseData(course));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addCourse = async (req: Request, res: Response) => {
  try {
    const { name, status, year } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const course: Course = await add(name, status, year);
    return res.status(201).json(mapCourseData(course));
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};

export const addSubjectIntoCourse = async (req: Request, res: Response) => {
  try {
    const { name, hours } = req.body;
    const { id } = req.params;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const course = await addSubject(id, name, hours);

    return res.status(201).json(mapCourseData(course));
  } catch (err) {
    return res.status(409).json({ message: err });
  }
};

export const editCourseById = async (req: Request, res: Response) => {
  try {
    const { name, status, year } = req.body;
    const { id } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw { errors: errors.array() };
    }

    const course = { name, status, year };
    const editedCourse: Course = await edit(id, course as Course);
    return res.status(200).json(mapCourseData(editedCourse));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const deletedCourse: Course = await deleteById(id);

    return res.status(200).json(mapCourseData(deletedCourse));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
