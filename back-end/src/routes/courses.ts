import express from "express";

import {
  getAllCourses,
  getCourseById,
  addCourse,
  editCourseById,
  deleteCourseById
} from "./controllers/courses.controller";

import { isAuth, isAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", isAuth, isAdmin, getAllCourses);

router.get("/:id", isAuth, getCourseById);

router.post("/", isAuth, isAdmin, addCourse);

router.delete("/:id", isAuth, isAdmin, deleteCourseById);

router.put("/:id", isAuth, isAdmin, editCourseById);

export default router;
