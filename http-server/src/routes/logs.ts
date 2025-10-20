import express from "express";
import { getProjectLogs } from "../controllers/logs/logs";

const router = express.Router();

router.get("/:projectSlug", getProjectLogs);

export default router;