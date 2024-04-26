import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
  const isEmailExists = await User.findOne({ email: payload.email });
  if (isEmailExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Email is Already Exists");
  }
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUser,
};
