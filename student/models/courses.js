import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, "../data.json");

const readData = () => {
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

const writeData = (data) => {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

export function getCourses() {
    const data = readData();
    return data.courses;
}

export function createCourse(body) {
    const data = readData();
    const newCourse = { id: data.courses.length + 1, ...body };
    data.courses.push(newCourse);
    writeData(data);
    return newCourse;
}
