import { Db, MongoClient } from "mongodb";

let _db: Db;

export const connectDb = async () => {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const database = await client.db("quiz");
    console.log("Connected to quiz database!");
    _db = database;
  } catch (e) {
    console.log("Error connecting to the database: ", e);
  }
};

export const db: () => Db = () => _db;
