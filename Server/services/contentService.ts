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
      ])
      .limit(amount)
      .toArray();
  },
  postScore: () => {},
};

export default contentServices;
