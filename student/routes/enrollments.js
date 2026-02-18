import { Router } from "express";
import { getEnrollmentController, createEnrollmentController } from "../controllers/enrollments.js";

 const router = Router();

 router.get("/", getEnrollmentController);
 router.post("/", createEnrollmentController);

 export default router;