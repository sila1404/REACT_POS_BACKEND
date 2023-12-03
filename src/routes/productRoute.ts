import { Router } from "express";
import { authenticateUser } from "../middlewares/authMiddleware";

import {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByID,
} from "../controller/productController";

const router = Router();

router.get("/", authenticateUser, getAllProduct);

router.get("/:id", authenticateUser, getProductByID);

router.post("/", authenticateUser, createProduct);

router.put("/:id", authenticateUser, updateProduct);

router.delete("/:id", authenticateUser, deleteProduct);

export default router;
