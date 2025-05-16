import express from "express";
import cors from "cors";
import { connectDb } from "./db";
import router from "./routes";
const app = express();
const port = 3001;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

connectDb();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
