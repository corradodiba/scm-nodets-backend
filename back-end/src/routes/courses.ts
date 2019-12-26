import express from "express";
import { getAllCourses, addCourse } from "./controllers/courses.controller";
import { isAuth } from "../middlewares/isAuth";

const router = express.Router();
router.get("/", isAuth, getAllCourses);
router.post("/", isAuth, addCourse);
export default router;
