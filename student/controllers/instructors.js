import { getInstructors, createInstructor } from "../models/instructors.js";

export function getInstructorController(req, res) {
    const instructors = getInstructors();
    res.json({ status: "success", data: instructors });
}

export function createInstructorController(req, res) {
    const newInstructor = createInstructor(req.body);
    res.json({ status: "success", data: newInstructor });
}
