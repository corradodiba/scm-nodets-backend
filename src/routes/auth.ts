import express from "express";

import { createUser, userLogin } from "./controllers/auth/auth.controller";
import { addValidator as addUserValidator } from "./validators/users.validator";

const router = express();

router.post("/signup", addUserValidator, createUser);
router.post("/login", userLogin);

export default router;
