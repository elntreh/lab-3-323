import { getEnrollments, createEnrollment } from "../models/enrollments.js";

export function getEnrollmentController(req, res) {
    const enrollments = getEnrollments();
    res.json(enrollments);
}

export function createEnrollmentController(req, res) {
    const newEnrollment = createEnrollment(req,body);
    res.json(newEnrollments);
}