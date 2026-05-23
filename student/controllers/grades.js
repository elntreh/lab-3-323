import { getGrades, createGrade } from "../models/grades.js";

export function getGradeController(req, res) {
    const grades = getGrades();
    res.json({ status: "success", data: grades });
}

export function createGradeController(req, res) {
    const newGrade = createGrade(req.body);
    res.json({ status: "success", data: newGrade });
}
