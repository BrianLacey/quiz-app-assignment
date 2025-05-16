import { db } from "../db";

const contentServices = {
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
};

export default contentServices;
