import { Router } from "express";
import categoriesControllers from "../controllers/categoriesControllers";

const router = Router();

router.get("/", categoriesControllers.readAll);

export default router;
