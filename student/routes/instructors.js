import { Router } from "express";
import { getInstructorController, createInstructorController } from "../controllers/instructors.js";

 const router = Router();

 router.get("/", getInstructorController);
 router.post("/", createInstructorController);

 export default router;