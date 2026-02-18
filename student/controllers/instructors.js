import { getInstructors, createInstructor } from "../models/instructors.js";

export function getInstructorController(req, res) {
    const instructors = getInstructors();
    res.json(instructors);
}

export function createInstructorController(req, res) {
    const newInstructors = createInstructor(req,body);
    res.json(newInstructors);
}