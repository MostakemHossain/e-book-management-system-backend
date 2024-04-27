import { Schema, model } from "mongoose";
import { TBooks } from "./book.interface";

const bookSchema = new Schema<TBooks>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: true,
      trim: true,
    },
    publisher: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ISBN: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model<TBooks>("Book", bookSchema);
