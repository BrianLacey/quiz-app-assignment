import { Request, Response } from "express";
import categoryServices from "../services/categoryService";

const categoryControllers = {
  readAll: async (req: Request, res: Response) => {
    try {
      const response = await categoryServices.readAll();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  },
};

export default categoryControllers;
