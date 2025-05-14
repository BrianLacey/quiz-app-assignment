import { Router } from "express";
import categoryControllers from "../controllers/categoryControllers";

const router = Router();

router.get("/", categoryControllers.readAll);

export default router;
