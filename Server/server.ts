import express, { Request, Response } from "express";
import cors from "cors";
import {db, connectDb} from "./db";
const app = express();
const port = 3001;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

connectDb();

app.use(cors(corsOptions));

app.get("/api", async (req: Request, res: Response) => {
  const data = await db.collection("test").find().toArray();
  console.log(data[0].subject);
  res.json({ greeting: "Hello API!", subject: data[0].subject });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
