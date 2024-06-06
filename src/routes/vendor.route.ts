import { registerVendor, loginVendor } from "../controllers/vendor.controller";
import { Router } from "express";

export default (router: Router) => {
  router.post("/vendor/register", registerVendor);
  router.get("/vendor/login", loginVendor);
};
