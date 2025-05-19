import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { connectDb } from "./db";
import router from "./routes";
import errorHandler from "./middleware/errorHandler";
import { IError } from "./models";
const app = express();
const port = 3001;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

connectDb();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router);
app.all("/*splat", (req: Request, res: Response, next: NextFunction) => {
  let error: IError;
  error = new Error(`Path \"${req.originalUrl}\" does not exist`);
  error.status = 404;
  next(error);
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
