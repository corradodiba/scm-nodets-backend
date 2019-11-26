import express from "express";
import {
  getAllStudents,
  getStudentById,
  deleteStudentById,
  addStudent,
  editStudentById,
  getAllGradesByStudentId
} from "./controllers/students.controller";
const router = express.Router();

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

router.get("/:id/grades", getAllGradesByStudentId);

router.delete("/:id", deleteStudentById);

router.post("/", addStudent);

router.put("/:id", editStudentById);

export default router;
