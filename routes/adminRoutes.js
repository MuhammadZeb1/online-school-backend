import express from "express";
import {
  approveTeacher,
  rejectTeacher,
  getTeacherRequests
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/requests", protect, getTeacherRequests);
router.post("/approve", protect, approveTeacher);
router.post("/reject", protect, rejectTeacher);

export default router;
