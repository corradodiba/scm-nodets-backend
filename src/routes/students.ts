import express from "express";
import {
  getAllStudents,
  getStudentById,
  deleteStudentById,
  addStudent,
  editStudentById
} from "./controllers/students.controller";

const router = express.Router();

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

router.delete("/:id", deleteStudentById);

router.post("/", addStudent);

router.put("/:id", editStudentById);

export default router;
