import express from "express";
import { getAllCourses, addCourse, editCourseById, deleteCourseById } from "./controllers/courses.controller";
import { isAuth } from "../middlewares/isAuth";

const router = express.Router();
router.get("/", isAuth, getAllCourses);
router.post("/", isAuth, addCourse);
router.delete("/:id", isAuth, deleteCourseById);
router.put("/:id", isAuth, editCourseById);

export default router;
