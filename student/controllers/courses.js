import { getCourse, createCourse } from "../models/courses.js";

export function getCourseController(req, res) {
    const courses = getCourses();
    res.json(courses);
}

export function createCourseController(req, res) {
    const newCourses = createCourse(req,body);
    res.json(newCourses);
}