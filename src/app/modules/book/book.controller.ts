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
const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books fetched Successfully",
    data: result,
  });
});
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getSingleBook(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book fetched Successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook
};
