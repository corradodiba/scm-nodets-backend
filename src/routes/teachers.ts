import express from "express";

import {
  getAllTeachers,
  getTeacherById,
  getSubjectsOfTeacher,
  deleteTeacherById,
  deleteSubjectsOfTeacher,
  addTeacher,
  editTeacherById,
  addSubjectsOfTeacher,
  addGradeOfTeacher,
  getAllGrades,
  editGradeById,
  deleteGradeById
} from "./controllers/teachers.controller";

const router = express();

router.get("/", getAllTeachers);

router.get("/:id", getTeacherById);

router.get("/:id/subjects", getSubjectsOfTeacher);

router.get("/:id/grades", getAllGrades);

router.delete("/:id", deleteTeacherById);

router.delete("/:id/subjects/:idSubject", deleteSubjectsOfTeacher);

router.delete("/:id/grades/:idGrade", deleteGradeById);

router.post("/", addTeacher);

router.post("/:id/subjects", addSubjectsOfTeacher);

router.post("/:id/grades", addGradeOfTeacher);

router.put("/:id", editTeacherById);

router.put("/:id/grades/:idGrade", editGradeById);

export default router;
