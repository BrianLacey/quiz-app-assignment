import { db } from "../db";
import { IQuizDoc } from "../models";

const contentServices = {
  readAll: () => {
    return db().collection("content").find().toArray();
  },

  readByParams: (category: string, difficulty: string, amount: number) => {
    return db()
      .collection("content")
      .aggregate([
        { $unwind: { path: "$results" } },
        {
          $match: {
            "results.category": category,
            "results.difficulty": difficulty,
          },
        },
        { $replaceRoot: { newRoot: "$results" } },
        {
          $project: {
            correct_answer: true,
            incorrect_answers: true,
            question: true,
          },
        },
      ])
      .limit(amount)
      .toArray();
  },

  readByQ: (question: string) => {
    return db()
      .collection("content")
      .aggregate([
        {
          $unwind: { path: "$results" },
        },
        {
          $match: {
            "results.question": question,
          },
        },
        { $replaceRoot: { newRoot: "$results" } },
        { $project: { correct_answer: true } },
      ])
      .toArray();
  },

  seedDb: (resultsDoc: { response_code: number; results: IQuizDoc[] }) => {
    return db().collection("content").insertOne(resultsDoc);
  },
};

export default contentServices;
