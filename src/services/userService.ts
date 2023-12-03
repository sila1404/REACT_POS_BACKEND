import userModel from "../models/userModel";
import User, { IUser } from "../models/userModel";
import { encryptPassword } from "../utils/encryption";

export const getAllUserService = async (): Promise<IUser[]> => {
  return await User.find();
};

export const getUserByIDService = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const getUserByUsernameService = async (
  username: string
): Promise<IUser | null> => {
  return await userModel.findOne({ username: username });
};

export const createUserService = async (data: IUser): Promise<IUser> => {
  data.password = encryptPassword(data.password);

  return await User.create(data);
};

export const updateUserService = async (
  id: string,
  data: IUser
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUserService = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};
