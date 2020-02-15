import express from "express";
import {
  getAllSubjects,
  getSubjectById,
  deleteSubjectById,
  addSubject,
  editSubjectById
} from "./controllers/subjects.controller";
import { isAuth } from "../middlewares/auth/isAuth";
import { isAdmin } from "../middlewares/auth/isAdmin";
import { isCurrentUser } from "../middlewares/auth.middleware";

import { addValidator, editValidator } from "./validators/subjects.validator";

const router = express.Router();
router.get("/", isAuth, isAdmin, getAllSubjects);

router.get("/:id", isAuth, isCurrentUser, getSubjectById);

router.delete("/:id", isAuth, isAdmin, deleteSubjectById);

router.post("/", isAuth, isAdmin, addValidator, addSubject);

router.put("/:id", isAuth, isAdmin, editValidator, editSubjectById);

export default router;
