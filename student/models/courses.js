import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const__filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, "data.json");


readData = () => {
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

writeData = (data) => {
    fs.writeFileSync(filepath, JSON.stringify(data));
}

export function getCourses() {
    const data = readData();
    return data.courses;
}

export function createCourse(body) {
    const data = readData();
    const newCourse = { id: data.courses.length + 1, ...body};
    data.courses.push(newCourse);
    writeData(data);
    return newCourse;
}