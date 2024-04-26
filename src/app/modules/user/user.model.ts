import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "User name is Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<TUser>("User", userSchema);
