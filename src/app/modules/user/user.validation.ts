import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is Required",
    }),
    email: z
      .string({
        required_error: "Email is Required",
      })
      .email(),
    password: z.string({
      required_error: "Password is Required",
    }),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};
