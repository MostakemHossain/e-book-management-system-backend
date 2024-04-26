import express, { NextFunction, Request, Response } from "express";
import { userRoutes } from "./app/modules/user/user.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Welcome to e-book API",
  });
});

app.use("/api/v1/users", userRoutes);

//global error handler
app.use(globalErrorHandler);

// not Found
app.use(notFound);

export default app;
