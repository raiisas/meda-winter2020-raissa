const fs = require("fs");

const myApp = {
    "type": "festival",
    "year": 2020,
    "action": function() {
        console.log(this.year + " needs review.");
        return;
    },
    tickets: ["single", "passport", "discount"],
    lastupdate: new Date(Date.now())
}; 

const appExists = fs.existsSync("app.json"); // Check if appExists exists

if (appExists) {
    items = fs.readFileSync("app.json", "utf-8"); // Read the file if it exist
} else {
    fs.writeFileSync("app.json", arguments, "utf-8"); // Write it and syncs it to the existing information
    items = ""; // This is an attempt at a callback function

let arguments = process.argv; // Command line used to run the script

let appObjectConverted = JSON.stringify(myApp); 

fs.writeFileSync("app.json", appObjectConverted, "utf-8");

// Parse makes the readable string into an Object for JSON
let parsedApp = fs.readFileSync("app.json", "utf-8");

parsedApp = JSON.parse(parsedApp);

console.log(arguments);