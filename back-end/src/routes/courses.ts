import express from "express";
import {
  getAllCourses,
  addCourse,
  editCourseById,
  deleteCourseById
} from "./controllers/courses.controller";
import { isAuth } from "../middlewares/isAuth";
import { isAuthorizate } from "../middlewares/isAuthorizate";

const router = express.Router();
router.get("/", isAuth, isAuthorizate, getAllCourses);
router.post("/", isAuth, isAuthorizate, addCourse);
router.delete("/:id", isAuth, isAuthorizate, deleteCourseById);
router.put("/:id", isAuth, isAuthorizate, editCourseById);

export default router;
