import express, { Request, Response } from "express";
import cors from "cors";
import {db, connectDb} from "./db";
import router from "./routes";
const app = express();
const port = 3001;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

connectDb();

app.use(cors(corsOptions));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
