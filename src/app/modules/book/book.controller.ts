import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/CatchAsync";
import sendResponse from "../../utils/SendResponse";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Book Created Successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
};
