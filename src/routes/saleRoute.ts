import { Router } from "express";
import { authenticateUser } from "../middlewares/authMiddleware";

import {
  getAllSale,
  getSaleByID,
  createSale,
  updateSale,
  deleteSale,
} from "../controller/saleController";

const router = Router();

router.get("/sale", authenticateUser, getAllSale);

router.get("/sale/:id", authenticateUser, getSaleByID);

router.post("/sale", authenticateUser, createSale);

router.put("/sale/:id", authenticateUser, updateSale);

router.delete("/sale/:id", authenticateUser, deleteSale);

export default router;
