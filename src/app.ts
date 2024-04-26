import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Welcome to e-book API",
  });
});

//global error handler
app.use(globalErrorHandler);

// not Found
app.use(notFound);

export default app;
