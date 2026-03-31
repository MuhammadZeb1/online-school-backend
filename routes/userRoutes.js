import express from "express";
import { requestTeacher } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/request-teacher", protect, requestTeacher);

export default router;
