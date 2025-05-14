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
};

export default categoriesServices;
