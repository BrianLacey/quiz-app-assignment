import { db } from "../db";

const categoriesServices = {
  readAll: () => {
    return db()
      .collection("categories")
      .aggregate([
        { $unwind: { path: "$trivia_categories" } },
        { $replaceRoot: { newRoot: "$trivia_categories" } },
      ]).toArray();
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
