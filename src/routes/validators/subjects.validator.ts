import { body, ValidationChain } from "express-validator";

export const addValidator: ValidationChain[] = [
  body("name")
    .exists()
    .withMessage("missing name field")
    .isString(),
  body("hours")
    .exists()
    .withMessage("missing hours field")
    .isInt()
    .withMessage("hours must be integer number")
];

export const editValidator: ValidationChain[] = [
  body("name")
    .optional()
    .isString(),
  body("hours")
    .optional()
    .isInt()
];
