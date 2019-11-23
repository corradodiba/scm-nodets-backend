import express from "express";
import { StudentModel, getAll, add, deleteStudent, modifyStudent, getStudentById } from "../models/student";
import Student from "../models/interfaces/student";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await getAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result: any = await getStudentById(req.params.id);
    res.status(200).json({
      _id: result._id,
      fiscalCode: result.fiscalCode,
      name: result.name,
      surname: result.surname,
      dateOfBirth: result.dateOfBirth
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result: any = await deleteStudent(req.params.id);
    res.status(201).json({
      message: "Student successfully deleted",
      student: {
        fiscalCode: result.fiscalCode,
        name: result.name,
        surname: result.surname,
        dateOfBirth: result.dateOfBirth
      }
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth } = req.body;
    const stud: Student = { fiscalCode, name, surname, dateOfBirth };
    const result: any = await add(stud);
    res.status(201).json({
      _id: result._id,
      fiscalCode: result.fiscalCode,
      name: result.name,
      surname: result.surname,
      dateOfBirth: result.dateOfBirth
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth } = req.body;
    const stud: Student = { fiscalCode, name, surname, dateOfBirth };
    const result: any = await modifyStudent(req.params.id, stud);
    res.status(201).json({
      message: "Subject successfully edited!",
      before: {
        fiscalCode: result.fiscalCode,
        name: result.name,
        surname: result.surname,
        dateOfBirth: result.dateOfBirth
      },
      after: { fiscalCode, name, surname, dateOfBirth }
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

export default router;
