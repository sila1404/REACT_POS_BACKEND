import { Response, Request, NextFunction } from "express";
import { successResponse } from "../utils/apiResponse";
import {
  getDailyIncomeService,
  getYesterdayIncomeService,
  getWeeklyIncomeService,
  getMonthlyIncomeService,
} from "../services/dashboardService";

export const getDailyIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getDailyIncomeService();
    return successResponse(
      res,
      "Daily income fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getYesterdayIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getYesterdayIncomeService();
    return successResponse(
      res,
      "Yesterday income fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getWeeklyIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getWeeklyIncomeService();
    return successResponse(
      res,
      "Weekly income fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getMonthlyIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getMonthlyIncomeService();
    return successResponse(
      res,
      "Monthly income fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};
