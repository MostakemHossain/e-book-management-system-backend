import { Types } from "mongoose";

export type TBooks = {
  id: string;
  title: string;
  author: string;
  publicationDate: Date;
  genre: string;
  rating: number;
  description: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  pageCount: number;
  language: string;
  publisher: Types.ObjectId;
  ISBN: string;
};
