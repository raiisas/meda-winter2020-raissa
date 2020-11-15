const fs = require("fs"); // File System module
const { type } = require("fs"); // Node's require module

const appExists = fs.existsSync("app.json"); // Testing if file (appExists) exists

let arguments = process.argv; // Command line used to run the script

let items;

if (appExists) {
    items = fs.renameSync("app.json", "newapp.json", "utf-8"); // Check if file exist and renames it o "newapp.json" if it does exist
} else {
    fs.writeFileSync("app.json", "utf-8"); // If it doesn't exist, write it and syncs it to the existing information
    items = "";
}

const myApp = {
    "type": "festival",
    "year": 2020,
    "action": function() {
        console.log(this.year + " needs review.");
        return;
    },
    tickets: ["single", "passport", "discount"],
    lastupdate: new Date(Date.now()) // Properties can be added below this line
}; 
// Coverts myapp to a String so it can be read
let appObjectConverted = JSON.stringify(myApp); 

fs.writeFileSync("app.json", appObjectConverted, "utf-8");

// Parse makes the readable string into an Object for JSON
let parsedApp = fs.readFileSync("app.json", "utf-8");

parsedApp = JSON.parse(parsedApp);

// console.log(myApp);
console.log(parsedApp);