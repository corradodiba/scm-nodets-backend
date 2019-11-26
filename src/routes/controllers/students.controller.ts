import { Response, Request } from "express";

import {
  Student,
  CreateStudent,
  getAll,
  getById,
  add,
  edit,
  deleteById
} from "../../models/student/student.model";
import { getAllStudentGrades } from "../../models/grades/grades.methods";
import { Grades } from "../../models/grades/grades.model";

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result: Student[] = await getAll();

    if (result instanceof Error) {
      throw result;
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const result: Student = await getById(req.params.id);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getAllGradesByStudentId = async (req: Request, res: Response) => {
  try {
    const result: Grades[] = await getAllStudentGrades(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteStudentById = async (req: Request, res: Response) => {
  try {
    const result: Student = await deleteById(req.params.id);

    return res.status(201).json({
      message: "Student successfully deleted",
      student: result
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addStudent = async (req: Request, res: Response) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth } = req.body;

    const stud = CreateStudent({
      fiscalCode,
      name,
      surname,
      dateOfBirth
    });

    const result: Student = await add(stud);

    return res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export const editStudentById = async (req: Request, res: Response) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth } = req.body;

    const stud = {
      fiscalCode,
      name,
      surname,
      dateOfBirth
    };

    const result: Student = await edit(req.params.id, stud as Student);

    return res.status(201).json({
      message: "Subject successfully edited!",
      before: stud,
      after: result
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
