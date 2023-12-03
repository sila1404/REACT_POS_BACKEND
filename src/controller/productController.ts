import { Response, Request, NextFunction } from "express";

import {
  getAllProductsService,
  getProductByIDService,
  createProductService,
  updateProductService,
  deleteProductService,
} from "../services/productService";

import { successResponse } from "../utils/apiResponse";

export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await getAllProductsService();
    return successResponse(res, "Products fetched successfully", products)
  } catch (error) {
    next(error);
  }
};

export const getProductByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const products = await getProductByIDService(id);
    return successResponse(res, "Product fetched successfully", products)
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await createProductService(req.body);
    return successResponse(res, "Product created successfully", products)
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const products = await updateProductService(id, req.body);
    return successResponse(res, "Product updated successfully", products)
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const products = await deleteProductService(id);
    return successResponse(res, "Product deleted successfully", products)
  } catch (error) {
    next(error);
  }
};
