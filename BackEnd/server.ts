import express, { Request, Response } from "express";
const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello API!");
});

app.get("/2", (req: Request, res: Response) => {
  res.send("Hello working backend!");
});

app.get("/3", (req: Request, res: Response) => {
  res.send("Hello again!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
