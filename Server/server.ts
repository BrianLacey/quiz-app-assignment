import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const port = 3001;

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.json("Hello API!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
