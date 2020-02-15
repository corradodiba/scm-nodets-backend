import { Request, Response } from "express";
import {
  Subject,
  CreateSubject,
  getAll,
  getById,
  add,
  edit,
  deleteById
} from "../../models/subject/subject.model";

import {
  mapSubjectsData,
  mapSubjectData
} from "../../helpers/mapSubjectData.helper";

import { validationResult } from "express-validator";

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const subjects: Subject[] = await getAll();
    return res.status(200).json(mapSubjectsData(subjects));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getSubjectById = async (req: Request, res: Response) => {
  try {
    const subject: Subject = await getById(req.params.id);
    return res.status(200).json(mapSubjectData(subject));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteSubjectById = async (req: Request, res: Response) => {
  try {
    const subject: Subject = await deleteById(req.params.id);
    return res.status(200).json(mapSubjectData(subject));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addSubject = async (req: Request, res: Response) => {
  try {
    const { name, hours } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw { errors: errors.array() };
    }
    const subject: Subject = await add(name, hours);
    return res.status(201).json(mapSubjectData(subject));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const editSubjectById = async (req: Request, res: Response) => {
  try {
    const { name, hours } = req.body;
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw { errors: errors.array() };
    }
    const subject: Subject = await edit(id, { name, hours } as Subject);
    return res.status(200).json(mapSubjectData(subject));
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
