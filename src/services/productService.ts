import productModel from "../models/productModel";
import Product, { IProduct } from "../models/productModel";

export const getAllProductsService = async (): Promise<IProduct[]> => {
  return await Product.find();
};

export const getProductByIDService = async (
  id: string
): Promise<IProduct | null> => {
  return await Product.findById(id);
};

export const createProductService = async (
  data: IProduct
): Promise<IProduct> => {
  return await Product.create(data);
};

export const updateProductService = async (
  id: string,
  data: IProduct
): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const updateProductStockService = async (
  id: string,
  quantity: number
): Promise<IProduct | null> => {
  return await productModel.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      qty: quantity,
    },
    {
      new: true,
    }
  );
};

export const deleteProductService = async (
  id: string
): Promise<IProduct | null> => {
  return await Product.findByIdAndDelete(id);
};
