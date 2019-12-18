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
  User,
  CreateUser
} from "../../models/user/user.model";

import * as GradesModel from "../../models/grades/grades.model";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getUsersById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getById(id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getSubjectsOfUser = async (req: Request, res: Response) => {
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

export const deleteUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await deleteById(id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth, subjects } = req.body;
    const user: User = CreateUser({
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    });
    const fetchedUser = await add(user);
    return res.status(200).json(fetchedUser);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addSubjectsOfUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { subjects } = req.body;
    const user = await addSubject(id, subjects);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({
      message: err
    });
  }
};

export const addGradeOfUser = async (req: Request, res: Response) => {
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

export const editUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { fiscalCode, name, surname, dateOfBirth, subjects } = req.body;
    const modifiedUser = {
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    };
    const updatedUser: User = await edit(id, modifiedUser as User);
    return res.status(200).json({
      message: "User successfully edited!",
      before: updatedUser,
      after: modifiedUser
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

export const deleteSubjectsOfUser = async (req: Request, res: Response) => {
  try {
    const { id, idSubject } = req.params;
    const subjects = await deleteSubjects(id, idSubject);
    if (!subjects) {
      throw "No user for deleting!";
    }
    res.json(subjects);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteGradeById = async (req: Request, res: Response) => {
  try {
    const { idGrade, idUser } = req.params;
    const deletedGrade = await GradesModel.deleteById(idGrade, idUser);
    return res.status(201).json(deletedGrade);
  } catch (err) {
    return res.status(404).json({
      message: err
    });
  }
};
