import { Request, Response, NextFunction } from "express";
import contentServices from "../services/contentService";
import categoryFromIds from "../helpers/categoryFromId";
import hideAnswers from "../helpers/hideAnswers";
import retrieveAnswers from "../helpers/retrieveAnswers";
import calcScore from "../helpers/calcScore";
import { IQuizDoc, ISelected, IWithCorrect } from "../models";

const contentControllers = {
  readByParams: async (req: Request, res: Response, next: NextFunction) => {
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
    } catch (error) {
      next(error);
    }
  },

  postScore: async (req: Request, res: Response, next: NextFunction) => {
    const { body }: { body: ISelected[] } = req;
    try {
      const withCorrect = await retrieveAnswers(body);
      const withScore = calcScore(withCorrect as IWithCorrect[]);
      res.json(withScore);
    } catch (error) {
      next(error);
    }
  },
};

export default contentControllers;
