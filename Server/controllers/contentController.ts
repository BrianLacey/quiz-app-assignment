import { Request, Response } from "express";
import contentServices from "../services/contentService";
import categoryFromIds from "../helpers/categoryFromId";
import hideAnswers from "../helpers/hideAnswers";
import { IQuizDoc } from "../models";

const contentControllers = {
  readByParams: async (req: Request, res: Response) => {
    const { category, difficulty, amount } = req.query as {
      category: string;
      difficulty: string;
      amount: string;
    };
    try {
      const name = await categoryFromIds(category);
      const data = await contentServices.readByParams(
        name,
        difficulty,
        parseInt(amount)
      );
      const hiddenAnswers = hideAnswers(data as IQuizDoc[]);
      res.json(hiddenAnswers);
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
