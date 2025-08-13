import { Router } from "express";
import homeRoute from "./home.js";
import catalogRoute from "./catalog.js";
import purchaseRoute from "./purchase.js";
import signinRoute from "./signin.js";
import booksRoute from "./books.js";
import usersRoute from "./users.js"

const router = Router();

router.use(homeRoute);
router.use(catalogRoute);
router.use(purchaseRoute);
router.use(signinRoute);
router.use(booksRoute);
router.use(usersRoute);

export default router;
