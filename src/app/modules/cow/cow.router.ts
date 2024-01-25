import { Router } from "express";
import { CowController } from "./cow.controller";
import { Cow } from "./cow.model";
import validateRequest from "../../middlwars/validationRequest";
import { CowValidation } from "./cow.validation";

const router = Router();
router.post(
  "/",
  validateRequest(CowValidation.createCowZodSchema),
  CowController.createCow
);
router.get("/", CowController.getAllCow);
router.get("/:id", CowController.getSingleCow);
router.patch(
  "/:id",
  validateRequest(CowValidation.createCowZodSchema),
  CowController.updateCow
);
router.delete("/:id", CowController.deleteCow);

export const cowRoutes = router;
