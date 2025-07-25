import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  userSidebar,
  getMessages,
  sendMessages,
} from "../controller/message.controller.js";
const router = express.Router();

router.get("/users", protectedRoute, userSidebar);
router.get("/:id", protectedRoute, getMessages);
router.post("/send/:id", protectedRoute, sendMessages);

export default router;
