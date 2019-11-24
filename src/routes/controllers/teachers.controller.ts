import { Response, Request } from "express";

import {
  Teacher,
  CreateTeacher,
  getAll,
  getById,
  add,
  edit,
  deleteById
} from "../../models/teacher/teacher.model";
import { addSubject } from "../../models/teacher/teacher.methods";

export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await getAll();
    return res.status(200).json(teachers);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const teacher = await getById(id);
    return res.status(200).json(teacher);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteTeacherById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const teacher = await deleteById(id);
    return res.status(200).json(teacher);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addTeacher = async (req: Request, res: Response) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth, subjects } = req.body;
    const teacher: Teacher = CreateTeacher({
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    });
    const fetchedTeacher = await add(teacher);
    return res.status(200).json(fetchedTeacher);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const editTeacherById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { fiscalCode, name, surname, dateOfBirth, subjects } = req.body;
    const modifiedTeacher: Teacher = CreateTeacher({
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    });
    const updatedTeacher: Teacher = await edit(id, modifiedTeacher);
    return res.status(200).json({
      message: "Teacher successfully edited!",
      before: updatedTeacher,
      after: modifiedTeacher
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addSubjectsOfTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { subjects } = req.body;
    const teacher = await addSubject(id, subjects);
    return res.status(201).json(teacher);
  } catch (err) {
    return res.status(500).json({
      message: err
    });
  }
};
