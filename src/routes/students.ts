import express from "express";
import { StudentModel, getAll, add } from "../models/student";
import Student from "../models/interfaces/student";

const router = express.Router();

router.get("/", (req, res, next) => {
  getAll().then((student) => {
    res.status(200).json(student);
  });
});

router.get("/:id", (req, res, next) => {
  res.status(200).json();
});

router.delete("/:id", (req, res, next) => {
  res.status(200).json();
});

router.post("/", (req, res, next) => {
  const { fiscalCode, name, surname, dateOfBirth } = req.body;
  const stud: Student = { fiscalCode, name, surname, dateOfBirth };
  add(stud).then((stud) => {
    res.status(201).json(stud);
  });
});

router.put("/:id", (req, res, next) => {
  res.status(200).json();
});

export default router;
