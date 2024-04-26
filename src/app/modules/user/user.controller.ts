import { NextFunction, Request, Response } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  console.log("create");
};

export const UserController = {
  createUser,
};
