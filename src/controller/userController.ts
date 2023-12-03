import { Request, Response, NextFunction } from "express";

import {
  getAllUserService,
  getUserByIDService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../services/userService";

import { successResponse, errorResponse } from "../utils/apiResponse";

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAllUserService();
    return successResponse(res, "Users fetched successfully", user)
  } catch (error) {
    next(error);
  }
};

export const getUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserByIDService(req.params.id);
    if(!user) return errorResponse(res, "User not found", 404, user)
    return successResponse(res, "User fetched successfully", user)
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUserService(req.body);
    return successResponse(res, "User created successfully", user)
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    return successResponse(res, "User updated successfully", user)
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await deleteUserService(req.params.id);
    return successResponse(res, "User deleted successfully", user)
  } catch (error) {
    next(error);
  }
};
