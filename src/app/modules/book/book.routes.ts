import express from "express";
import multer from "multer";
import path from "path";
import validateRequest from "../../../middlewares/validateRequest";
import { BookController } from "./book.controller";
import { BookValidation } from "./book.validation";
const router = express.Router();

//file upload
const upload = multer({
  dest: path.resolve(__dirname, "../../../../src/uploads"),
  limits: { fieldSize: 3e7 },
});
router.post(
  "/create-book",
  validateRequest(BookValidation.createBookValidationSchema),
  BookController.createBook
);
router.get("/", BookController.getAllBook);
router.get("/:id", BookController.getSingleBook);
router.patch(
  "/:id",
  validateRequest(BookValidation.updateBookValidationSchema),
  BookController.updateBook
);
router.delete("/:id", BookController.deleteBook);

export const bookRoutes = router;
