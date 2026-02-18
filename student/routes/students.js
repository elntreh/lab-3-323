import { Router } from "express";
import { getStudentController, createStudentController } from "../controllers/students.js";

 const router = Router();

 router.get("/", getStudentController);
 router.post("/", createStudentController);

 export default router;