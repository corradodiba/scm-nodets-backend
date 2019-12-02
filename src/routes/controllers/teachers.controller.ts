import { Response, Request } from "express";

import {
  getAll,
  getById,
  getSubjects,
  add,
  addSubject,
  edit,
  deleteById,
  deleteSubjects,
  Teacher,
  CreateTeacher
} from "../../models/teacher/teacher.model";

import * as GradesModel from "../../models/grades/grades.model";

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

export const getSubjectsOfTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subjects = await getSubjects(id);
    return res.status(200).json(subjects);
  } catch (err) {
    return res.status(404).json({
      messagge: err
    });
  }
};

export const getAllGrades = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const grades: GradesModel.Grades[] = await GradesModel.getAll(id);
    return res.status(200).json(grades);
  } catch (err) {
    return res.json(404).json({
      message: err
    });
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
    const {
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects,
      email,
      password
    } = req.body;
    const teacher: Teacher = CreateTeacher({
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects,
      email,
      password
    });
    const fetchedTeacher = await add(teacher);
    return res.status(200).json(fetchedTeacher);
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

export const addGradeOfTeacher = async (req: Request, res: Response) => {
  try {
    const { grade, student, subject } = req.body;
    const { id } = req.params;
    const addedGrade = await GradesModel.add(
      Number(grade),
      student,
      subject,
      id
    );
    return res.status(201).json(addedGrade);
  } catch (err) {
    return res.json(404).json({
      message: err
    });
  }
};

export const editTeacherById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { fiscalCode, name, surname, dateOfBirth, subjects } = req.body;
    const modifiedTeacher = {
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    };
    const updatedTeacher: Teacher = await edit(id, modifiedTeacher as Teacher);
    return res.status(200).json({
      message: "Teacher successfully edited!",
      before: updatedTeacher,
      after: modifiedTeacher
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const editGradeById = async (req: Request, res: Response) => {
  try {
    const { id, idGrade } = req.params;
    const { grade } = req.body;
    const updatedGrade = await GradesModel.editGrade(
      id,
      idGrade,
      Number(grade)
    );
    return res.status(201).json(updatedGrade);
  } catch (err) {
    return res.status(404).json({
      message: err
    });
  }
};

export const deleteSubjectsOfTeacher = async (req: Request, res: Response) => {
  try {
    const { id, idSubject } = req.params;
    const subjects = await deleteSubjects(id, idSubject);
    if (!subjects) {
      throw "No teacher for deleting!";
    }
    res.json(subjects);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteGradeById = async (req: Request, res: Response) => {
  try {
    const { idGrade, idTeacher } = req.params;
    const deletedGrade = await GradesModel.deleteById(idGrade, idTeacher);
    return res.status(201).json(deletedGrade);
  } catch (err) {
    return res.status(404).json({
      message: err
    });
  }
};
