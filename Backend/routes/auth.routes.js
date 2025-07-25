import express from "express";
const router = express.Router();
import {
  Signup,
  Login,
  Logout,
  Update,
  CheckAuth,
} from "../controller/auth.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.put("/update-profile", protectedRoute, Update);
router.get("/check", protectedRoute, CheckAuth);

export default router;
