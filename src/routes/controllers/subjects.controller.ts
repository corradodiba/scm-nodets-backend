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

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const result = await getAll();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getSubjectById = async (req: Request, res: Response) => {
  try {
    const result: Subject = await getById(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const deleteSubjectById = async (req: Request, res: Response) => {
  try {
    const result: Subject = await deleteById(req.params.id);
    return res.status(200).json({
      message: "Subject successfully deleted",
      subject: result
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const addSubject = async (req: Request, res: Response) => {
  try {
    const { name, hours } = req.body;
    const subj: Subject = CreateSubject({ name, hours });
    const result: Subject = await add(subj);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const editSubjectById = async (req: Request, res: Response) => {
  try {
    const { name, hours } = req.body;
    const subj = { name, hours };
    const result: Subject = await edit(req.params.id, subj as Subject);
    return res.status(200).json({
      message: "Subject successfully edited!",
      before: result,
      after: { name, hours }
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
