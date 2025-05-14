import { Request, Response } from "express";
import contentServices from "../services/contentService";

const contentControllers = {
  readByParams: async (req: Request, res: Response) => {
    try {
      const response = await contentServices.readByParams();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  },
  postScore: async (req: Request, res: Response) => {
    try {
      const response = await contentServices.postScore();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  },
};

export default contentControllers;
