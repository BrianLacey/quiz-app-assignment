import { Request, Response, NextFunction } from "express";
import { IError } from "../models";

const errorHandler = (
  error: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(error.status || 500)
    .json({ message: error.message || "An error occurred." });
};
export default errorHandler;
