import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Welcome to e-book API",
  });
});

//global error handler
app.use(globalErrorHandler);

export default app;
