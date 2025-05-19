import { Router } from "express";
import contentControllers from "../controllers/contentController";
import { validateResults } from "../middleware/validateResults";

const router = Router();

router.get("/", contentControllers.readByParams);
router.post("/score", validateResults, contentControllers.postScore);

export default router;
