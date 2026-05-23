import { getAssignments, createAssignment } from "../models/assignments.js";

export function getAssignmentController(req, res) {
    const assignments = getAssignments();
    res.json({ status: "success", data: assignments });
}

export function createAssignmentController(req, res) {
    const newAssignment = createAssignment(req.body);
    res.json({ status: "success", data: newAssignment });
}
