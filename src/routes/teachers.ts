import express from "express";

import {
  getAllTeachers,
  getTeacherById,
  getSubjectsOfTeacher,
  deleteTeacherById,
  deleteSubjectsOfTeacher,
  addTeacher,
  editTeacherById,
  addSubjectsOfTeacher
} from "./controllers/teachers.controller";

const router = express();

router.get("/", getAllTeachers);

router.get("/:id", getTeacherById);

router.get("/:id/subjects", getSubjectsOfTeacher);

router.delete("/:id", deleteTeacherById);

router.delete("/:id/subjects/:idSubject", deleteSubjectsOfTeacher);

router.post("/", addTeacher);

router.put("/:id", editTeacherById);

router.post("/:id/subjects", addSubjectsOfTeacher);

export default router;
