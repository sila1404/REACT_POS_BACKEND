import { Router } from "express";

import { getAllUser, getUserByID, createUser, updateUser, deleteUser } from "../controller/userController";

import { authenticateUser } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", authenticateUser, getAllUser);

router.get("/:id", authenticateUser, getUserByID);

router.post("/", authenticateUser, createUser);

router.put("/:id", authenticateUser, updateUser);

router.delete("/:id", authenticateUser, deleteUser);

export default router;
