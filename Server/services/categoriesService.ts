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

  // readById: (id: number) => {
  //   return db()
  //     .collection("categories")
  //     .findOne(
  //       {
  //         "trivia_categories.id": id,
  //       }
  //     );
  // },
};

export default categoriesServices;
