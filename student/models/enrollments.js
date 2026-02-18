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

export function getEnrollments() {
    const data = readData();
    return data.enrollments;
}

export function createEnrollment(body) {
    const data = readData();
    const newEnrollment = { id: data.enrollments.length + 1, ...body};
    data.grades.push(newEnrollment);
    writeData(data);
    return newEnrollment;
}