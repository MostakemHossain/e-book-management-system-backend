import { z } from "zod";

const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    author: z.string({
      required_error: "Author is required",
    }),
    publicationDate: z.string({
      required_error: "Title is required",
    }),
    genre: z.string({
      required_error: "Genre is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    price: z.number({
      required_error: "Price is required",
    }),
    imageUrl: z.string({
      required_error: "Image is required",
    }),
    pageCount: z.number({
      required_error: "Page count is required",
    }),
    language: z.string({
      required_error: "Language is required",
    }),
    ISBN: z.string({
      required_error: "ISBN is required",
    }),
  }),
});
export const BookValidation = {
  createBookValidationSchema,
};
