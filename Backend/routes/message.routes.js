import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {userSidebar,getMessages} from "../controller/message.controller.js"
const router = express.Router();

router.get("/users",protectedRoute,userSidebar)
router.get("/:id",protectedRoute,getMessages)

export default router;
