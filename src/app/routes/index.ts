import { Router } from "express";
import { userRoutes } from "../modules/user/user.router";
import { cowRoutes } from "../modules/cow/cow.router";
const router = Router();

router.use("/auth", userRoutes);
router.use("/users", userRoutes);
router.use("/cows", cowRoutes);

export default router;
