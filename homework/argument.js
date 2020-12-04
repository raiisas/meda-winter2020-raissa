const fs = require("fs");

const appExists = fs.existsSync("app.json");

let arguments = process.argv; 

let clientApp;

if (appExists) {
    clientApp = fs.readFileSync("app.json", "utf-8");
} else {
    fs.writeFileSync("app.json",arguments, "utf-8"); 
    clientApp = ""; 
} 

let appObjectConverted = JSON.stringify(clientApp); 

fs.writeFileSync("app.json", appObjectConverted, "utf-8");

let parsedApp = fs.readFileSync("app.json", "utf-8");

parsedApp = JSON.parse(parsedApp);