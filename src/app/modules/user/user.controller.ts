import { RequestHandler } from "express";
import { userService } from "./user.service";

//user create
const createUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await userService.createUser(req.body);
    res.json({
      statusCode: 200,
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
//get all user

const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const getUser = await userService.getAllUsers(req.body);

    res.json({
      success: true,
      statusCoe: 200,
      message: "Users retrieved successfully",
      data: getUser,
    });
  } catch (error) {
    next(error);
  }
};

//get single user
const getSingleUser: RequestHandler = async (req, res, next) => {
  try {
    const getSingleUser = await userService.getSingleUser(req.params.id);
    res.json({
      success: true,
      statusCode: 200,
      message: "User retrieved successfully",
      data: getSingleUser,
    });
  } catch (error) {
    next(error);
  }
};

//update User
const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await userService.updateUser(id, updateData);
    res.json({
      success: true,
      statusCode: 200,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const deleteUser = await userService.deleteUser(req.params.id);
    res.json({
      success: true,
      statusCode: 200,
      message: "Uers deleted successfully",
      data: deleteUser,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
