import { Schema, model } from "mongoose";
import { ICow, cowModel } from "./cow.interface";
import { CowCategory, cowBreed, cowLabel, cowLocation } from "./cow.constans";

const cowSchema = new Schema<ICow>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      enum: cowLocation,
    },
    breed: {
      type: String,
      required: true,
      enum: cowBreed,
    },
    weight: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
      enum: cowLabel,
      default: "for sale",
    },
    category: {
      type: String,
      required: true,
      enum: CowCategory,
    },
    seller: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Cow = model<ICow, cowModel>("cow", cowSchema);
