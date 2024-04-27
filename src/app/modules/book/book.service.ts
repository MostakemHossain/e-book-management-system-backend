import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TBooks } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (payload: TBooks) => {
  const user = await User.findById(payload.publisher);
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, "User not found");
  }
  const result = await Book.create(payload);
  return result;
};
const getAllBooks = async () => {
  const result = await Book.find({});
  return result;
};
const getSingleBook = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};
const updateBook = async (id: string, payload: Partial<TBooks>) => {
  const isBooksExists = await Book.findById(id);
  if (!isBooksExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Books not found");
  }
  const result = await Book.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
};
