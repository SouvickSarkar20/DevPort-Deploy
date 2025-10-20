import express from "express"
import {deploy} from "../controllers/deploy/deploy";
import {getDeploymentHistory} from "../controllers/deploy/details"
import { authMiddleware } from "../middleware";

const router=express.Router();

router.post("/deploy",authMiddleware,deploy);

router.get("/history/:slug", authMiddleware, getDeploymentHistory);

export default router;