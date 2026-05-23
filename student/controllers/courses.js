import { getCourses, createCourse } from "../models/courses.js";

export function getCourseController(req, res) {
    const courses = getCourses();
    res.json({ status: "success", data: courses });
}

export function createCourseController(req, res) {
    const newCourse = createCourse(req.body);
    res.json({ status: "success", data: newCourse });
}
