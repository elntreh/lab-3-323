import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { studentsRouter } from "./routes/students.js";
import { instructorsRouter } from "./routes/instructors.js";
import { gradesRouter } from "./routes/grades.js";
import { enrollmentsRouter } from "./routes/enrollments.js";
import { coursesRouter } from "./routes/courses.js";
import { assignmentsRouter } from "./routes/assignments.js";


const app = express();

app.use(express.json()); // middleware

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(filepath, "utf-8"));


/**
 * use this writeFile method on the file system module to update the data.json file
 * fs.writeFile(filepath, JSON.stringify(data));
 */
app.use("/students", studentsRouter);
app.use("instructors", instructorsRouter);
app.use("/grades", gradesRouter );
app.use("/enrollments", enrollmentsRouter);
app.use("/courses", coursesRouter);
app.use("/assignments", assignmentsRouter);

//Setting up the server.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
