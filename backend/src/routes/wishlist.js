import WishlistController from "../controller/wishlistController";
import { Router } from "express";

const router = Router();

router.get("/recent", WishlistController.find);
router.post("/recent", WishlistController.register);

export default router;
