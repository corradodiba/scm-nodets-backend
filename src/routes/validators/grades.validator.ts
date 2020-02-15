import { body, ValidationChain } from "express-validator";

export const addValidator: ValidationChain[] = [
  body("grade")
    .exists()
    .withMessage("missing grade field")
    .isInt()
    .withMessage("grade must be integer number")
    .custom((grade) => grade >= 0 && grade <= 10)
    .withMessage("grade must be between 0 and 10"),
  body("subject")
    .exists()
    .withMessage("missing subject field")
    .isString()
];

export const editValidator: ValidationChain[] = [
  body("grade")
    .optional()
    .isInt()
    .withMessage("grade must be integer number")
    .custom((grade) => grade >= 0 && grade <= 10)
    .withMessage("grade must be between 0 and 10"),
  body("subject")
    .optional()
    .isString()
];
