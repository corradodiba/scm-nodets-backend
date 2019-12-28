import express from "express";
import {
  getAllCourses,
  getCourseById,
  addCourse,
  editCourseById,
  deleteCourseById
} from "./controllers/courses.controller";
import { isAuth } from "../middlewares/isAuth";
import { isAuthorizate } from "../middlewares/isAuthorizate";

const router = express.Router();
router.get("/", isAuth, isAuthorizate, getAllCourses);
router.get("/:id", isAuth, getCourseById);
router.post("/", isAuth, isAuthorizate, addCourse);
router.delete("/:id", isAuth, isAuthorizate, deleteCourseById);
router.put("/:id", isAuth, isAuthorizate, editCourseById);

export default router;
