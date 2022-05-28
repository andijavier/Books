import WishlistController from "../controller/wishlistController";
import { Router } from "express";

const router = Router();

router.get("/", WishlistController.find);
router.post("/", WishlistController.register);
router.get("/:id", WishlistController.findByIdController);

export default router;
