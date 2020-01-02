import express from "express";
import {
  getAllSubjects,
  getSubjectById,
  deleteSubjectById,
  addSubject,
  editSubjectById
} from "./controllers/subjects.controller";

const router = express.Router();
router.get("/", getAllSubjects);

router.get("/:id", getSubjectById);

router.delete("/:id", deleteSubjectById);

router.post("/", addSubject);

router.put("/:id", editSubjectById);

export default router;
