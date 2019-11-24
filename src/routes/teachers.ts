import express from "express";

import {
  getAllTeachers,
  getTeacherById,
  deleteTeacherById,
  addTeacher,
  editTeacherById
} from "./controllers/teachers.controller";
import { addSubject } from "../models/teacher/teacher.methods";
import { CreateSubject, Subject } from "../models/subject/subject.model";

const router = express();

router.get("/", getAllTeachers);

router.get("/:id", getTeacherById);

router.delete("/:id", deleteTeacherById);

router.post("/", addTeacher);

router.put("/:id", editTeacherById);

router.post("/:id/subjects", async (req, res) => {
  try {
    const { id } = req.params;
    const { subjects } = req.body;
    let subjs: Subject[] = [];
    for (let subj of subjects) {
      subjs.push(subj);
    }
    const teacher = await addSubject(id, subjs);
    return res.status(201).json(teacher);
  } catch (err) {
    return res.status(500).json({
      message: err
    });
  }
});

export default router;
