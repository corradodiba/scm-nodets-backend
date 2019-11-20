import express from "express";

const router = express.Router();

const dummySubjects: Object[] = [
  {
    name: "Back-end"
  }
];

router.get("/", (req, res, next) => {
  res.status(200).json();
});

router.get("/:id", (req, res, next) => {
  res.status(200).json();
});

router.delete("/:id", (req, res, next) => {
  res.status(200).json();
});

router.post("/", (req, res, next) => {
  res.status(200).json();
});

router.put("/:id", (req, res, next) => {
  res.status(200).json();
});

export default router;
