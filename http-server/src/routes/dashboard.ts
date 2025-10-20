import express from "express";
import { getUserDashboard } from "../controllers/dashboard/dashboard";
import {authMiddleware } from "../middleware"

const router = express.Router();

router.get("/", authMiddleware,getUserDashboard);

export default router;