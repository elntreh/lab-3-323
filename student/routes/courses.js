import { Router } from "express";
import { getCourseController, createCourseController } from "../controllers/courses.js";

 const router = Router();

 router.get("/", getCourseController);
 router.post("/", createCourseController);

 export default router;