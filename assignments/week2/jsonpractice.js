// Rule 1: All keys MUST be in quotes.
// Rule 2: No functions allowed.
// Rule 3: Only one "object".
// Rule 4: no comments.

const fs = require("fs");

const fileExists = fs.existsSync("example.json");

let contents;

if (fileExists) {
    contents = fs.readFileSync("example.json", "utf-8");
} else {
    console.log("File does not exist. Quitting...");
    return;
}

let constentsObject = JSON.parse(contents); // method to create object

console.log(contents);
console.log(constentsObject);
// console.log(contents.name);
// console.log(typeof contents);