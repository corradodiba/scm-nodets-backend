import express from "express";

import {
  getAllUsers,
  getUsersById,
  getSubjectsOfUser,
  deleteUserById,
  deleteSubjectsOfUser,
  editUserById,
  addSubjectsOfUser,
  addGradeOfUser,
  getAllGrades,
  editGradeById,
  deleteGradeById,
  getGradeById
} from "./controllers/users.controller";

import {
  isAuth,
  isAdmin,
  isCurrentUser,
  isAtLeastTeacher
} from "../middlewares/auth.middleware";

import { editValidator } from "./validators/users.validator";
import { addValidator as addSubjectValidator } from "./validators/subjects.validator";
import {
  addValidator as addGradeValidator,
  editValidator as editGradeValidator
} from "./validators/grades.validator";

const router = express();

router.get("/", isAuth, isAdmin, getAllUsers);

router.get("/:id", isAuth, isCurrentUser, getUsersById);

router.get("/:id/subjects", isAuth, isCurrentUser, getSubjectsOfUser);

router.get("/:id/grades", isAuth, isCurrentUser, getAllGrades);

router.get("/:id/grades/:idGrade", isAuth, isCurrentUser, getGradeById);

router.delete("/:id", isAuth, isAdmin, deleteUserById);

router.delete(
  "/:id/subjects/:idSubject",
  isAuth,
  isAdmin,
  deleteSubjectsOfUser
);

router.delete(
  "/:id/grades/:idGrade",
  isAuth,
  isAtLeastTeacher,
  deleteGradeById
);

router.post(
  "/:id/subjects",
  isAuth,
  isAdmin,
  addSubjectValidator,
  addSubjectsOfUser
);

router.post("/:id/grades", isAuth, isAdmin, addGradeValidator, addGradeOfUser);

router.put("/:id", isAuth, isCurrentUser, editValidator, editUserById);

router.put(
  "/:id/grades/:idGrade",
  isAuth,
  isAtLeastTeacher,
  editGradeValidator,
  editGradeById
);

export default router;
