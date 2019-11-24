import express from "express";

import {
  getAllTeachers,
  getTeacherById,
  deleteTeacherById,
  addTeacher,
  editTeacherById,
  addSubjectsOfTeacher
} from "./controllers/teachers.controller";
import { addSubject } from "../models/teacher/teacher.methods";

const router = express();

router.get("/", getAllTeachers);

router.get("/:id", getTeacherById);

router.delete("/:id", deleteTeacherById);

router.post("/", addTeacher);

router.put("/:id", editTeacherById);

router.post("/:id/subjects", addSubjectsOfTeacher);

export default router;
