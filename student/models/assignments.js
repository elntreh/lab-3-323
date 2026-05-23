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

export function getAssignments() {
    const data = readData();
    return data.assignments;
}

export function createAssignment(body) {
    const data = readData();
    const newAssignment = { id: data.assignments.length + 1, ...body };
    data.assignments.push(newAssignment);
    writeData(data);
    return newAssignment;
}
