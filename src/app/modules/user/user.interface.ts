import { Model } from "mongoose";

export type role = "seller" | "buyer";

export type IUser = {
  password: string;
  role: role;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type userModel = Model<IUser>;
