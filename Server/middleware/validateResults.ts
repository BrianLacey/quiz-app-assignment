import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { resultsSchema } from "../schemas";

export const validateResults = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await resultsSchema.validate(req.body);
    next();
  } catch (error) {
    const { errors } = error as ValidationError;
    res.status(400).json({ errors });
  }
};
