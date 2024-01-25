import { z } from "zod";
//req validations
//body--->object
//data--->object
const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is required",
    }),
    age: z.string({
      required_error: "age is required",
    }),
    price: z.number({
      required_error: "price is required",
    }),
    location: z.string({
      required_error: "location is required",
    }),
    breed: z.string({
      required_error: "breed is required",
    }),
    weight: z.string({
      required_error: "weight is required",
    }),
    category: z.string({
      required_error: "category is required",
    }),
  }),
});

export const CowValidation = {
  createCowZodSchema,
};
