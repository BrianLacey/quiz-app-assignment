import { db } from "../db";

const categoriesServices = {
  readAll: () => {
    return db()
      .collection("categories")
      .findOne(
        {
          trivia_categories: { $exists: true },
        },
        {
          projection: { _id: 0 },
        }
      );
  },

  readById: (id: number) => {
    return db()
      .collection("categories")
      .aggregate([
        { $unwind: { path: "$trivia_categories" } },
        { $match: { "trivia_categories.id": id } },
        { $replaceRoot: { newRoot: "$trivia_categories" } },
      ]).toArray();
  },
};

export default categoriesServices;
