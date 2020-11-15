// Rule 1: All keys MUST be in quotes.
// Rule 2: No functions allowed.
// Rule 3: Only one "object".
// Rule 4: no comments.

const fs = require("fs"); // method to check if file exist

const fileExists = fs.existsSync("example.json");

let contents;

if (fileExists) {
    contents = fs.readFileSync("example.json", "utf-8");
} else {
    console.log("File does not exist. Quitting...");
    return;
}

let constentsObject = JSON.parse(contents); // method to create JS object

console.log(typeof contents);
console.log(typeof constentsObject);

const myObject = {
    "lastname": "Doe",
    "ability": function() {
        // this -> keyword refers Object it is in
        console.log(this.lastName + "is eating food"); 
    }, 
    possessions: ["car", "house", "computer"],
    deceased: false,
    age: 45,
    "is fun": false,
    lastUpdate: new Date(Date.now()),
    actualDate: "11/4/2020"
};

let jsonObjectConverted = JSON.stringify(myObject); // Converts Object to a String

// console.log(jsonObjectConverted);

fs.writeFileSync("savedJSON.json", jsonObjectConverted, "utf-8");

myObject.ability();

myObject.age;
myObject["is fun"];

let parsedStringifiedJSON = fs.readFileSync("savedJSON.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

console.log(myObject);
console.log(parsedStringifiedJSON);

// console.log(contents.name);
// console.log(typeof contents);