import { Router } from "express";
import categoryRoutes from "./categoryRoutes";
import contentRoutes from "./contentRoutes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/quiz", contentRoutes);

export default router;