import express from "express";

import {
  getAllUsers,
  getUsersById,
  getSubjectsOfUser,
  deleteUserById,
  deleteSubjectsOfUser,
  addUser,
  editUserById,
  addSubjectsOfUser,
  addGradeOfUser,
  getAllGrades,
  editGradeById,
  deleteGradeById
} from "./controllers/user.controller";

const router = express();

router.get("/", getAllUsers);

router.get("/:id", getUsersById);

router.get("/:id/subjects", getSubjectsOfUser);

router.get("/:id/grades", getAllGrades);

router.delete("/:id", deleteUserById);

router.delete("/:id/subjects/:idSubject", deleteSubjectsOfUser);

router.delete("/:id/grades/:idGrade", deleteGradeById);

router.post("/", addUser);

router.post("/:id/subjects", addSubjectsOfUser);

router.post("/:id/grades", addGradeOfUser);

router.put("/:id", editUserById);

router.put("/:id/grades/:idGrade", editGradeById);

export default router;
