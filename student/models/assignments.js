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

export function getAssignments() {
    const data = readData();
    return data.assignments;
}

export function createAssignment(body) {
    const data = readData();
    const newAssignment = { id: data.assignments.length + 1, ...body};
    data.assignments.push(newAssignment);
    writeData(data);
    return newAssignment;
}