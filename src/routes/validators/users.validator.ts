import { body, ValidationChain } from "express-validator";

export const editValidator: ValidationChain[] = [
  body("email")
    .isEmail()
    .withMessage("Please insert valid email"),
  body("password")
    .optional()
    .isString(),
  body("fiscalCode")
    .optional()
    .isString()
    .isLength({ min: 16, max: 16 })
    .withMessage("The fiscal code length must be 16"),
  body("name")
    .optional()
    .isString(),
  body("surname")
    .optional()
    .isString(),
  body("dateOfBirth").optional(),
  body("type")
    .optional()
    .custom((value) => isValidTypeUser(value))
    .withMessage("type must be Admin or Student or Teacher")
];

export const addValidator: ValidationChain[] = [
  body("email")
    .exists()
    .withMessage("missing email field")
    .isEmail()
    .withMessage("Please insert valid email"),
  body("password")
    .exists()
    .withMessage("missing password field")
    .isString(),
  body("fiscalCode")
    .exists()
    .withMessage("missing fiscalCode field")
    .isString()
    .isLength({ min: 16, max: 16 })
    .withMessage("The fiscal code length must be 16"),
  body("name")
    .exists()
    .withMessage("missing name field")
    .isString(),
  body("surname")
    .exists()
    .withMessage("missing surname field")
    .isString(),
  body("dateOfBirth")
    .exists()
    .withMessage("missing dateOfBirth field"),
  body("type")
    .exists()
    .withMessage("missing type field")
    .custom((value) => isValidTypeUser(value))
    .withMessage("type must be Admin or Student or Teacher")
];

const isValidTypeUser = (value: string): boolean => {
  return value === "Admin" || value === "Student" || value === "Teacher";
};
