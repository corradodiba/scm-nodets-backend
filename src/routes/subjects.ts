import express from "express";
import { Subject, SubjectModel, getAll, getById, deleteOneById, add, edit } from "../models/subject";

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
    const result: any = await getById(req.params.id);
    res.status(200).json({
      _id: result._id,
      name: result.name,
      hours: result.hours
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result: any = await deleteOneById(req.params.id)
    res.status(200).json({
      message: "Subject successfully deleted",
      subject: {
        name: result.name,
        hours: result.hours
      }
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, hours } = req.body;
    const subj: Subject = { name, hours };
    const result: any = await add(subj);
    res.status(201).json({
      _id: result._id,
      name: result.name,
      hours: result.hours
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, hours } = req.body;
    const subj: Subject = { name, hours };
    const result: any = await edit(req.params.id, subj);
    res.status(200).json({
      message: "Subject successfully edited!",
      before: {
        name: result.name,
        hours: result.hours
      },
      after: { name, hours }
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

export default router;
