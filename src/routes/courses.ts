import express from "express";

import {
  getAllCourses,
  getCourseById,
  addCourse,
  editCourseById,
  deleteCourseById,
  addSubjectIntoCourse
} from "./controllers/courses.controller";

import { isAuth, isAdmin } from "../middlewares/auth.middleware";
import {
  editValidator,
  deleteValidator,
  addSubjectValidator,
  addValidator
} from "./validators/courses.validator";

const router = express.Router();

router.get("/", isAuth, isAdmin, getAllCourses);

router.get("/:id", isAuth, getCourseById);

router.post("/", isAuth, isAdmin, addValidator, addCourse);

router.post("/:id/subjects", isAuth, addSubjectValidator, addSubjectIntoCourse);

router.delete("/:id", isAuth, isAdmin, deleteValidator, deleteCourseById);

router.put("/:id", isAuth, isAdmin, editValidator, editCourseById);

export default router;
