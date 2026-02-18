import { Router } from "express";
import { getAssignmentController, createAssignmentController } from "../controllers/assignments.js";

 const router = Router();

 router.get("/", getAssignmentController);
 router.post("/", createAssignmentController);

 export default router;