import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();

app.use(express.json()); // middleware

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(filepath, "utf-8"));

/**
 * use this writeFile method on the file system module to update the data.json file
 * fs.writeFile(filepath, JSON.stringify(data));
 */

//Setting up the server.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
