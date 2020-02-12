import { Response, Request } from "express";

import {
  getAll,
  getByType,
  getById,
  getSubjects,
  add,
  addSubject,
  edit,
  deleteById,
  deleteSubjects,
  User
} from "../../models/user/user.model";

import * as GradesModel from "../../models/grades/grades.model";

import { mapUsersData, mapUserData } from "../../helpers/mapUserData.helper";
import { mapSubjectsData } from "../../helpers/mapSubjectData.helper";
import { mapGradeData, mapGradesData } from "../../helpers/mapGradeData.helper";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    let users: User[];
    const { type } = req.query;
    if (type) {
      users = await getByType(type);
    } else {
      users = await getAll();
    }
    return res.status(200).json(mapUsersData(users));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getUsersById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getById(id);
    return res.status(200).json(mapUserData(user));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getSubjectsOfUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subjects = await getSubjects(id);
    return res.status(200).json(mapSubjectsData(subjects));
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
    return res.status(200).json(mapGradesData(grades));
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
    return res.status(200).json(mapUserData(user));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addSubjectsOfUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const subject = req.body;
    const user = await addSubject(id, subject);
    return res.status(201).json(mapUserData(user));
  } catch (err) {
    return res.status(500).json({
      message: err
    });
  }
};

export const addGradeOfUser = async (req: Request, res: Response) => {
  try {
    const { grade, subject } = req.body;
    const { id } = req.params;
    const addedGrade = await GradesModel.add(Number(grade), subject, id);
    return res.status(201).json(mapGradeData(addedGrade));
  } catch (err) {
    return res.status(404).json({
      message: err
    });
  }
};

export const editUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedUser: User = await edit(id, req.body as User);
    return res.status(200).json(mapUserData(updatedUser));
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
    return res.status(201).json(mapGradeData(updatedGrade));
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
    res.status(201).json(mapSubjectsData(subjects));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteGradeById = async (req: Request, res: Response) => {
  try {
    const { idGrade, idUser } = req.params;
    const deletedGrade = await GradesModel.deleteById(idGrade, idUser);
    return res.status(201).json(mapGradeData(deletedGrade));
  } catch (err) {
    return res.status(404).json({
      message: err
    });
  }
};
