const fs = require("fs");

// let appExists = fs.existsSync('app.json');

//let appArguments = process.argv; // Command line used to run the script


const app = process.argv;

// Coverts myapp to a String so it can be read

if (app) {
let appObjectConverted = JSON.stringify(app, null, 5); 

fs.writeFileSync("app.json", appObjectConverted, "utf-8");

// Parse makes the readable string into an Object for JSON
} else {
let parsedApp = fs.readFileSync("app.json", "utf-8");

parsedApp = JSON.parse(parsedApp);
}

console.log(app);