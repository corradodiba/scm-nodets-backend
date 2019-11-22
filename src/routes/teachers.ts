import express from "express";
import { getAll, create, getTeacherById, deleteTeacherById, updateTeacherById } from '../models/teacher';
import Subject from '../models/interfaces/subject';
import Teacher from '../models/interfaces/teacher';
const router = express();

router.get("/", async (req, res, next) => {
  const teachers = await getAll();
  return res.status(200).json(teachers);
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const teacher = await getTeacherById(id)
    return res.status(200).json(teacher);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.get("/:id/subjects", (req, res, next) => {
  const id = req.params.id;
  try {
    getTeacherById(id).then((teacher) => {
      res.status(200).json({ "teacher": teacher });
    })
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const teacher = await deleteTeacherById(id);
    return res.status(200).json(teacher);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    } = req.body;
    const teacher: Teacher = {
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    };
    const fetchedTeacher = await create(teacher);
    console.log(teacher);
    return res.status(200).json(fetchedTeacher);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

// Still to do: accessing subject
router.get("/:id/:subject", (req, res, next) => {
  res.status(200).json();
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const { fiscalCode, name, surname, dateOfBirth, subjects } = req.body;
    const modifiedTeacher: Teacher = { fiscalCode, name, surname, dateOfBirth, subjects };
    const updatedTeacher: any = await updateTeacherById(id, modifiedTeacher);
    return res.status(200).json({
      message: "Teacher successfully edited!",
      before: updatedTeacher,
      after: modifiedTeacher
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

export default router;
