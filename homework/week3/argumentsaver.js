const fs = require("fs");

const appExists = fs.existsSync("app.json");

let items;

if (appExists) {
    items = fs.readFileSync("app.json", "utf-8");
} else {
    console.log("App doesn't exist... Write it.");
    return;
}

let parsedApp = JSON.parse(items);

console.log(typeof items);
console.log(typeof parsedApp);

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


let appObjectConverted = JSON.stringify(myApp);

// console.log(appObjectConverted);

fs.writeFileSync("app.json", appObjectConverted, "utf-8");

myApp.action();

myApp.year;
myApp["is fun"];

let parsedStringifiedJSON = fs.readFileSync("app.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(myApp);
console.log(parsedStringifiedJSON);