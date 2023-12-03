import { Router } from "express";
import { login, validateToken } from "../controller/authController";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = Router();

router.post("/login", login);
router.post("/validate", authenticateUser, validateToken)

export default router;
