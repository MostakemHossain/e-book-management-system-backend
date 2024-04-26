import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../../../config";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TLogin } from "./auth.interface";

const loginUser = async (payload: TLogin) => {
  const isEmailExists = await User.findOne({
    email: payload.email,
  });
  if (!isEmailExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "User not Found");
  }
  // check if the password is correct
  const isPasswordMatch = await bcrypt.compare(
    payload?.password,
    isEmailExists?.password
  );
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, "invalid credentials");
  }
  const jwtPayload = {
    userId: isEmailExists._id,
    email: isEmailExists.email,
  };
  const accessToken = await jwt.sign(
    jwtPayload,
    config.jwt_access_serect as string,
    { expiresIn: config.jwt_access_serect_expires_in }
  );
  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
};
