import { Schema, model, Document } from "mongoose";

export interface ISaleItem extends Document {
  saleID: string
  productID: string
  quantity: number
  price: number
  createdAt: Date
  updatedAt: Date
}

const saleItemSchema = new Schema({
  saleID: { type: String, required: true },
  productID: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export default model<ISaleItem>("SaleItem", saleItemSchema);
