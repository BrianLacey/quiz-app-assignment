import { Router } from "express";
import contentControllers from "../controllers/contentController";

const router = Router();

router.get("/", contentControllers.readByParams);
router.get("/score", contentControllers.postScore);

export default router;
