import express from "express";
import { SubjectModel, getAll, add } from "../models/subject";
import Subject from "../models/interfaces/subject";

const router = express.Router();
router.get("/", (req, res, next) => {
  getAll().then((subject) => {
    res.status(200).json(subject);
  })
});

router.get("/:id", (req, res, next) => {

  /*   console.log("pa " + req.params.id);
    for (let subject of dummySubjects) {
      console.log("ID " + subject._id);
      if (subject._id == req.params.id)
        return res.status(200).json(subject);
    }
    res.status(404).json({ message: "Subject not found" });
   */
});

router.delete("/:id", (req, res, next) => {
  res.status(200).json();
});

router.post("/", (req, res, next) => {
  const { name, hours } = req.body;
  const subj: Subject = { name, hours };

  add(subj).then((subj) => {
    res.status(201).json(subj);
  })
});

router.put("/:id", (req, res, next) => {
  res.status(200).json();
});

export default router;
