import { IUser, userModel } from "./user.interface";
import { User } from "./user.model";

//crete user

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

// Route: /api/1v / users(GET);
// get all users
const getAllUsers = async (payload: IUser): Promise<IUser[]> => {
  const result = await User.find(payload);
  return result;
};
//get Single user
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};
//update user
const updateUser = async (
  id: string,
  payload: IUser
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
//delete user
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
export const userService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
