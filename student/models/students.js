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

export function getStudents() {
    const data = readData();
    return data.students;
}

export function createStudent(body) {
    const data = readData();
    const newStudent = { id: data.students.length + 1, ...body };
    data.students.push(newStudent);
    writeData(data);
    return newStudent;
}
