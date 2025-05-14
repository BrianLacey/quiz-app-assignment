import { Request, Response } from "express";
import categoriesServices from "../services/categoriesService";

const categoriesControllers = {
  readAll: async (req: Request, res: Response) => {
    try {
      const response = await categoriesServices.readAll();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  },
};

export default categoriesControllers;
