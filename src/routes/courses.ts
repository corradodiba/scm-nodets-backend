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

const router = express.Router();

router.get("/", isAuth, isAdmin, getAllCourses);

router.get("/:id", isAuth, getCourseById);

router.post("/", isAuth, isAdmin, addCourse);

router.post("/:id/subjects", isAuth, addSubjectIntoCourse);

router.delete("/:id", isAuth, isAdmin, deleteCourseById);

router.put("/:id", isAuth, isAdmin, editCourseById);

export default router;
