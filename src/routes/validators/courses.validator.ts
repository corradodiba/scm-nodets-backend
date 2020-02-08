import { body, param, ValidationChain } from "express-validator";

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
    .isString(),
  param("id").isMongoId()
];

export const deleteValidator = [param("id").isMongoId()];

export const addSubjectValidator = [
  body("name")
    .exists()
    .isString(),
  body("hours")
    .exists()
    .isInt(),
  param("id").isMongoId()
];

export const addValidator = [
  body("name").exists(),
  body("status")
    .exists()
    .isBoolean(),
  body("year")
    .exists()
    .isString()
];

export const getByIdValidator = [param("id").isMongoId()];
