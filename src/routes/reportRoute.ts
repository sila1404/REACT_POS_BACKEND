import { Router } from "express";
import { authenticateUser } from "../middlewares/authMiddleware";
import {
  getDailyIncomeReport,
  getYesterdayIncomeReport,
  getWeeklyIncomeReport,
  getMonthlyIncomeReport,
} from "../controller/reportController";

const router = Router();

router.get("/dashboard/daily-report", authenticateUser, getDailyIncomeReport);

router.get(
  "/dashboard/yesterday-report",
  authenticateUser,
  getYesterdayIncomeReport
);

router.get("/dashboard/weekly-report", authenticateUser, getWeeklyIncomeReport);

router.get(
  "/dashboard/monthly-report",
  authenticateUser,
  getMonthlyIncomeReport
);

export default router;
