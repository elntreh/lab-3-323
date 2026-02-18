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

export function getInstructors() {
    const data = readData();
    return data.instructors;
}

export function createInstructor(body) {
    const data = readData();
    const newInstructor = { id: data.instructors.length + 1, ...body};
    data.instructors.push(newInstructor);
    writeData(data);
    return newInstructor;
}