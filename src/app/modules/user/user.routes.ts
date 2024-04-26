import express from "express";
import validateRequest from "../../../middlewares/validateRequest";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.createUser
);

export const userRoutes = router;
