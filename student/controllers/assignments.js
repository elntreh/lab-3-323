import { getAssignments, createAssignment } from "../models/assignments.js";

export function getAssignmnentController(req, res) {
    const assignments = getAssignments();
    res.json(assignments);
}

export function createAssignmentController(req, res) {
    const newAssignments = createAssignment(req,body);
    res.json(newAssignments);
}