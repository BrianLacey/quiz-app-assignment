import { Request, Response } from "express";
import contentServices from "../services/contentService";
import categoryFromIds from "../helpers/categoryFromId";

const contentControllers = {
  readByParams: async (req: Request, res: Response) => {
    const { query } = req;
    try {
      const data = await categoryFromIds(query);
      // console.log(name);
      // const response = await contentServices.readByParams();
      // res.json(response);
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
