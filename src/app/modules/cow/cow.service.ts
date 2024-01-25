import { SortOrder } from "mongoose";
import {
  IGenericResponse,
  IPaginationOptions,
  paginationHelper,
} from "../../../constans/pagination";
import { ICow, ICowFilter } from "./cow.interface";
import { Cow } from "./cow.model";

//create cow api
const createCow = async (payload: ICow): Promise<ICow> => {
  const result = await Cow.create(payload);
  return result;
};

//get All cow
export interface IFilter {
  searchTerm?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  location?: string | undefined;
}

const getAllCow = async (
  pagination: IPaginationOptions,
  filters: IFilter
): Promise<IGenericResponse<ICow[]>> => {
  const { searchTerm, minPrice, maxPrice, location } = filters;
  // const { minPrice, maxPrice, location } = filtersData;
  // const searchTerm = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: [
        {
          location: {
            $regex: searchTerm,
            $options: "i",
          },
        },
        {
          breed: {
            $regex: searchTerm,
            $options: "i",
          },
        },
        {
          category: {
            $regex: searchTerm,
            $options: "i",
          },
        },
      ],
    });
  }
  if (minPrice) {
    andConditions.push({ price: { $gt: minPrice } });
  }
  if (maxPrice) {
    andConditions.push({ price: { $lt: maxPrice } });
  }
  if (location) {
    andConditions.push({ location: location });
  }

  // if (Object.keys().length) {
  //   andConditions.push({
  //     $and: Object.entries(filtersData).map(([field, value]) => ({
  //       [field]: value,
  //     })),
  //   });
  // }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const total = await Cow.countDocuments();
  const page = pagination.page || 1;
  const limit = pagination.limit || 10;
  const sortBy = pagination.sortBy || "createdAt";
  const sortOrder = pagination.sortOrder === "asc" ? 1 : -1;
  console.log(sortOrder);
  // const {
  //   page = 0,
  //   limit = 10,
  //   skip = page * limit,
  //   sortBy = "createdAt",
  //   sortOrder = "desc",
  // } = paginationHelper.calculatePagination(pagination);
  // const sortCondition: { [key: string]: SortOrder } = {};
  // if (sortBy && sortOrder) {
  //   sortCondition[sortBy] = sortOrder;
  // }
  // const result = await Cow.find(whereCondition)
  // console.log(whereCondition, searchTerm);
  const result = await Cow.find(whereCondition)
    .sort({ sortBy: sortOrder })
    .skip(page - 1)
    .limit(limit)
    .sort(sortBy);

  
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//single cow get
const getSingleCow = async (id: string): Promise<ICow | null> => {
  const getCow = await Cow.findById(id);
  return getCow;
};
//update single cow
const updateCow = async (id: string, payload: ICow): Promise<ICow | null> => {
  const updateCow = await Cow.findByIdAndUpdate(id, payload, { new: true });
  return updateCow;
};
//delete cow
const deleteCow = async (id: string): Promise<ICow | null> => {
  const deleteId = await Cow.findByIdAndDelete(id, { new: true });
  return deleteId;
};
export const CowService = {
  createCow,
  getAllCow,
  getSingleCow,
  updateCow,
  deleteCow,
};
