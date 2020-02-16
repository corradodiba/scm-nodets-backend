import { body, ValidationChain } from "express-validator";

export const editValidator: ValidationChain[] = [
  body("name")
    .optional()
    .isString(),
  body("status")
    .optional()
    .custom(
      (value) =>
        value === "pending" || value === "complete" || value === "in progress"
    ),
  body("year")
    .optional()
    .isString()
];

export const addSubjectValidator = [
  body("name")
    .exists()
    .isString(),
  body("hours")
    .exists()
    .isInt()
];

export const addValidator = [
  body("name")
    .exists()
    .isString(),
  body("status")
    .exists()
    .custom(
      (value) =>
        value === "pending" || value === "complete" || value === "in progress"
    ),
  body("year")
    .exists()
    .isString()
];
