import { Router } from "express";
import {
  createVendor,
  signInVendor,
  verifyVendor,
} from "../controller/vendorController";

const router: Router = Router();

router.route("/create-vendor").post(createVendor);
router.route("/sign-in-vendor").post(signInVendor);
router.route("/verify-vendor").patch(verifyVendor);

export default router;
