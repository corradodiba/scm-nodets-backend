import express from "express";

import { signup } from "./controllers/auth.controller";

const router = express();

router.post("/signup", signup);
router.post("/login");

export default router;
