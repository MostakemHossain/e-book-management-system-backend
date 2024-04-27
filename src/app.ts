import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { AuthRoutes } from "./app/modules/auth/auth.routes";
import { bookRoutes } from "./app/modules/book/book.routes";
import { userRoutes } from "./app/modules/user/user.routes";
import config from "./config";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: config.frontend_domain,
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Welcome to e-book API",
  });
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/book", bookRoutes);

//global error handler
app.use(globalErrorHandler);

// not Found
app.use(notFound);

export default app;
