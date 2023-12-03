import { Response, Request, NextFunction } from "express";
import { successResponse } from "../utils/apiResponse";
import { ISale } from "../models/saleModel";

import { createSaleService, getLatestSale } from "../services/saleService";
import { createSaleItemService } from "../services/saleItemService";
import { ISaleItem } from "../models/saleItemModel";
import { updateProductStockService } from "../services/productService";

export const getAllSale = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return successResponse(res, "Sales fetched successfully", {});
  } catch (error) {
    next(error);
  }
};

export const getSaleByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    return successResponse(res, "Sale fetched successfully", {});
  } catch (error) {
    next(error);
  }
};

export const createSale = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const latestSale = await getLatestSale();

    let billcode;
    if (latestSale) {
      billcode = latestSale.billcode + 1;
    } else {
      billcode = 1;
    }

    const data = {
      billcode: billcode,
      payMethod: req.body.paymentMethod,
      total: req.body.total,
      sellerID: req.body.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as ISale;

    const sale = await createSaleService(data);

    req.body.products.forEach(async (product: any) => {
      const saleItemData = {
        saleID: sale._id,
        productID: product._id,
        quantity: product.qtyToSale,
        price: product.price,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as ISaleItem;

      await createSaleItemService(saleItemData);

      const newQuantity = product.qty - product.qtyToSale;
      await updateProductStockService(product._id, newQuantity);
    });

    return successResponse(res, "Sale created successfully", sale);
  } catch (error) {
    next(error);
  }
};

export const updateSale = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    return successResponse(res, "Sale updated successfully", {});
  } catch (error) {
    next(error);
  }
};

export const deleteSale = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    return successResponse(res, "Sale deleted successfully", {});
  } catch (error) {
    next(error);
  }
};
