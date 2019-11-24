import express from "express";

import {
  Student,
  CreateStudent,
  getAll,
  getById,
  add,
  edit,
  deleteById
} from "../models/student/student.model";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result: Student[] = await getAll();

    if (result instanceof Error) {
      throw result;
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result: Student = await getById(req.params.id);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result: Student = await deleteById(req.params.id);

    return res.status(201).json({
      message: "Student successfully deleted",
      student: result
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth } = req.body;

    const stud = CreateStudent({
      fiscalCode,
      name,
      surname,
      dateOfBirth
    });

    const result: Student = await add(stud);

    return res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { fiscalCode, name, surname, dateOfBirth } = req.body;

    const stud: Student = CreateStudent({
      fiscalCode,
      name,
      surname,
      dateOfBirth
    });

    const result: Student = await edit(req.params.id, stud);

    return res.status(201).json({
      message: "Subject successfully edited!",
      before: stud,
      after: result
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

export default router;
