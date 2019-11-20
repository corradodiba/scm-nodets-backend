import express from "express";

const router = express.Router();

const dummyTeachers: Object[] = [
  {
    name: "Letizia",
    surname: "Carfì",
    age: "39"
  }
];

router.get("/", (req, res, next) => {
  res.status(200).json();
});

router.get("/:id", (req, res, next) => {
  res.status(200).json();
});

router.get("/:id/subjects", (req, res, next) => {
  res.status(200).json();
});

router.delete("/:id", (req, res, next) => {
  res.status(200).json();
});

router.post("/", (req, res, next) => {
  res.status(200).json();
});

router.get("/:id/:subject", (req, res, next) => {
  res.status(200).json();
});

router.put("/:id", (req, res, next) => {
  res.status(200).json();
});

export default router;
