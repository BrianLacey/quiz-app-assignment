import { Db, MongoClient } from "mongodb";

export let db: Db;

export const connectDb = async () => {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const _db = client.db("quiz");
    console.log("Connected to quiz!");
    db = _db;
  } catch (e) {
    console.log("Error connecting to the database: ", e);
  }
};
