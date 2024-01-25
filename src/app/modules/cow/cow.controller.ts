import { RequestHandler } from "express";
import { CowService, IFilter } from "./cow.service";
import {
  IPaginationOptions,
  paginationFields,
} from "./../../../constans/pagination";

const createCow: RequestHandler = async (req, res, next) => {
  try {
    const result = await CowService.createCow(req.body);

    res.json({
      success: true,
      statusCode: 200,
      message: "Cow created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCow: RequestHandler = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm;
    const paginationOptions: IPaginationOptions = {
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      sortBy: req.query.sortBy as string,
      sortOrder: req.query.sortOrder as string,
    };

    const filter: IFilter = {
      searchTerm: searchTerm as string,
      minPrice: Number(req.query.minPrice),
      maxPrice: Number(req.query.maxPrice),
      location: req.query.location as string,
    };

    const result = await CowService.getAllCow(paginationOptions, filter);
    res.json({
      success: true,
      statusCode: 200,
      message: "Cows retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
//get single cow
const getSingleCow: RequestHandler = async (req, res, next) => {
  try {
    const result = await CowService.getSingleCow(req.params.id);
    res.json({
      success: true,
      statCode: 200,
      message: "Cow retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
//update cow api
const updateCow: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await CowService.updateCow(id, updateData);
    res.json({
      success: true,
      statusCode: 200,
      message: "Cow updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
//delete cow api
const deleteCow: RequestHandler = async (req, res, next) => {
  const id = req.params.id;

  const deleteCow = await CowService.deleteCow(id);

  res.json({
    success: true,
    statusCode: 200,
    message: "Cow deleted successfully",
    data: deleteCow,
  });
};
export const CowController = {
  createCow,
  getAllCow,
  getSingleCow,
  updateCow,
  deleteCow,
};
