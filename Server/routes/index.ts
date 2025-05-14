import { Router } from "express";
import categoriesRoutes from "./categoriesRoutes";
import contentRoutes from "./contentRoutes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/quiz", contentRoutes);

export default router;
