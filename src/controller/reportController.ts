import { Response, Request, NextFunction } from "express";
import { successResponse } from "../utils/apiResponse";
import { getDailySaleReport, getYesterdaySaleReport, getWeeklySaleReport, getMonthlySaleReport } from "../services/reportService";

export const getDailyIncomeReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getDailySaleReport();
    return successResponse(
      res,
      "Daily income report fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getYesterdayIncomeReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getYesterdaySaleReport();
    return successResponse(
      res,
      "Yesterday income report fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getWeeklyIncomeReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getWeeklySaleReport();
    return successResponse(
      res,
      "Weekly income report fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getMonthlyIncomeReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getMonthlySaleReport();
    return successResponse(
      res,
      "Monthly income report fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};