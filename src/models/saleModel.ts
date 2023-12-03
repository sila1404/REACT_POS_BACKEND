import { Schema, model, Document } from "mongoose";

export interface ISale extends Document {
  billcode: number;
  payMethod: string;
  total: number;
  sellerID: string;
  createdAt: Date;
  updatedAt: Date;
}

const saleSchema = new Schema({
  billcode: { type: Number, required: true, unique: true },
  payMethod: { type: String, required: true },
  total: { type: Number, required: true },
  sellerID: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export default model<ISale>("Sale", saleSchema);
