import { Schema, model, Document } from "mongoose";

export interface IUser extends Document{
  username: string 
  password: string
  age: number
  address: string
}

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  age: {type: Number, required: true},
  address: {type: String, required: true},
})

export default model<IUser>("User", userSchema)