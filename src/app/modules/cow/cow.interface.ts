import { Model, Schema } from "mongoose";

export type ILocation =
  | "Dhaka"
  | "Chattogram"
  | "Barishal"
  | "Rajshahi"
  | "Sylhet"
  | "Comilla"
  | "Rangpur"
  | "Mymensingh";

export type ICowbreed =
  | "Brahman"
  | "Nellore"
  | "Sahiwal"
  | "Gir"
  | "Indigenous"
  | "Indigenous"
  | "Tharparkar"
  | "Kankrej";
export type ILabel = "for sale" | "sold out";
export type ICategory = "Dairy" | "Beef" | "DualPurpose";

export type ICow = {
  name: string;
  age: string;
  price: number;
  location: ILocation;
  breed: ICowbreed;
  weight: string;
  label: ILabel;
  category: ICategory;
  seller: Schema.Types.ObjectId;
};
export type ICowFilter = {
  filters?: string;
  searchTerm?: string;
};
export type cowModel = Model<ICow>;
