import { Router } from "express";
import { getGradeController, createGradeController } from "../controllers/grades.js";

 const router = Router();

 router.get("/", getGradeController);
 router.post("/", createGradeController);

 export default router;