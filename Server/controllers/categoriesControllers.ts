import { Request, Response } from "express";
import categoriesServices from "../services/categoriesService";

const categoriesControllers = {
  readAll: async (req: Request, res: Response) => {
    // try {
      throw new Error("Testing error response");
      // MAKE ERROR HANDLER MIDDLEWARE TO SIMPLIFY CODES AND MESSAGES
      const response = await categoriesServices.readAll();
      res.json(response);
    // } catch (e) {
      res.json(response);
    // }
  },
};

export default categoriesControllers;
