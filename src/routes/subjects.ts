import express from "express";
import {
  Subject,
  CreateSubject,
  getAll,
  getById,
  add,
  edit,
  deleteById
} from "../models/subject/subject.model";

const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const result = await getAll();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const result: Subject = await getById(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result: Subject = await deleteById(req.params.id);
    return res.status(200).json({
      message: "Subject successfully deleted",
      subject: result
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, hours } = req.body;
    const subj: Subject = CreateSubject({ name, hours });
    const result: Subject = await add(subj);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, hours } = req.body;
    const subj: Subject = CreateSubject({ name, hours });
    const result: Subject = await edit(req.params.id, subj);
    return res.status(200).json({
      message: "Subject successfully edited!",
      before: result,
      after: { name, hours }
    });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

export default router;
