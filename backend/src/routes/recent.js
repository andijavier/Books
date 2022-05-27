import RecentController from "../controller/recentController";
import { Router } from "express";

const router = Router();

router.get("/", RecentController.find);
router.post("/", RecentController.register);

export default router;
