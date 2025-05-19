import { Request, Response, NextFunction } from "express";
import categoriesServices from "../services/categoriesService";

const categoriesControllers = {
  readAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await categoriesServices.readAll();
      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};

export default categoriesControllers;
