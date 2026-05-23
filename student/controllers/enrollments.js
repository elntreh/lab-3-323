import { getEnrollments, createEnrollment } from "../models/enrollments.js";

export function getEnrollmentController(req, res) {
    const enrollments = getEnrollments();
    res.json({ status: "success", data: enrollments });
}

export function createEnrollmentController(req, res) {
    const newEnrollment = createEnrollment(req.body);
    res.json({ status: "success", data: newEnrollment });
}
