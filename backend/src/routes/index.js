import { Router } from "express";
import routerRecent from "./recent";
import routerWishlist from "./wishlist";

const router = Router();

router.use("/recent", routerRecent);
router.use("/wishlists", routerWishlist);

export default router;
