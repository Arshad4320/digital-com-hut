import { ICategory, ICowbreed, ILabel, ILocation } from "./cow.interface";

export const cowLocation: ILocation[] = [
  "Dhaka",
  "Chattogram",
  "Barishal",
  "Rajshahi",
  "Sylhet",
  "Comilla",
  "Rangpur",
  "Mymensingh",
];
export const cowBreed: ICowbreed[] = [
  "Brahman",
  "Nellore",
  "Sahiwal",
  "Gir",
  "Indigenous",
  "Indigenous",
  "Tharparkar",
  "Kankrej",
];
export const cowLabel: ILabel[] = ["for sale", "sold out"];
export const CowCategory: ICategory[] = ["Dairy", "Beef", "DualPurpose"];
