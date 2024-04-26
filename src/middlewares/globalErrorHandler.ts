import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import config from "../config";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: err.message || `Something went wrong`,
    errStack: config.NODE_ENV === "development" ? err.stack : "",
  });
};
export default globalErrorHandler;
