import { db } from "../db";
import { ICategoryDoc } from "../models";

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
  
  seedDb: (categoriesDoc: { trivia_categories: ICategoryDoc[] }) => {
    return db().collection("categories").insertOne(categoriesDoc);
  },
};

export default categoriesServices;
