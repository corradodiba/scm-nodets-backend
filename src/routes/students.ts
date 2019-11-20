import express from "express";

const router = express.Router();

const dummyStundets: Object[] = [
  {
    name: "Gaetano",
    surname: "Carfì",
    age: "21"
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
