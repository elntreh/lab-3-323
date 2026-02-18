import { getGrades, createGrade } from "../models/grades.js";

export function getGradeController(req, res) {
    const grades = getGrades();
    res.json(grades);
}

export function createGradeController(req, res) {
    const newGrades = createGrade(req,body);
    res.json(newGrades);
}