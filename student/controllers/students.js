import { getStudents, createStudent } from "../models/students.js";

export function getStudentController(req, res) {
    const students = getStudents();
    res.json({ status: "success", data: students });
}

export function createStudentController(req, res) {
    const newStudent = createStudent(req.body);
    res.json({ status: "success", data: newStudent });
}
