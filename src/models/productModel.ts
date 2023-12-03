import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  barcode: string
  name: string
  price: number
  qty: number
}

const productSchema = new Schema({
  barcode: {type: String, required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true},
  qty: {type: Number, required: true},
})

export default model<IProduct>("Product", productSchema)