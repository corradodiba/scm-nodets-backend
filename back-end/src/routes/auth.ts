import express from "express";

import { createUser, userLogin } from "./controllers/auth/auth.controller";

const router = express();

router.post("/signup", createUser);
router.post("/login", userLogin);

export default router;
