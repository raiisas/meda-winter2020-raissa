// Javascript doesn't have a way to read or write files
// JS in the backend Node is running the JS in the backend

// process.argv -> Property of the process object everytime you run something in node 
// process.argv; // This is an Array

// loads up the node fs module so it can be used in this script | fs = file system
const fs = require("fs"); 

// check this in node and notice the info it outputs | this is how we pass info to from node to our JS
let arguments = process.argv;

// Check if we have an existing file called "history.txt"
if (fs.existsSync("history.txt")) {
    let history = fs.readFileSync("history.txt", "utf-8");
} else {
    fs.writeFileSync("history.txt", "", "utf-8");
}

// console.log(arguments);

let fileName = arguments[2];

// console.log(fileName);

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("Sorry, that file doesn't exist! Check your filepath.");
    return;
}

// const serverPassword = 12345; // checking if json works

//console.log(arguments); // process.argv is communicating with node

let filename = arguments[2];

// console.log(filename);

// Check if the file exists
const fileExists = fs.existsSync(filename);

// This method allows us to read a file
//let fileContents = fs.readFileSync("essay.txt", "utf-8")
let fileContents = fs.readFileSync(filename, "utf-8"); // utf-8 is character code 

// Error message if file doesn't exists
if (fileExists === false) {
    console.log("Sorry, that file doesn't exist check your filepath");
    return;
}

// console.log(fileContents); we don't want this to show up in node

// Convert a string into an Array

let contentArray = fileContents.split(""); // split divides the characters

// console.log(contentArray);

let letterCount = 0;

for (let i = 0; i < contentArray.length; i++) {

// checks for and skips the following characters
    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") {
        continue;
    } else {
        letterCount++;
    }


}
console.log(`The file ${filename} contains a total of ${letterCount} letters.`);

// Count Letters END

// Count Words START

let wordArray = fileContents.split(" ");

// let wordCount = 0;

/* for (let i = 0; i < contentArray.length; i++) {
    wordCount++
}
*/console.log(`It has a total of ${wordArray.length} words in it.`)

// Count Words END

// Count Sentences START

// let sentenceArray = fileContents.split("."); 

let thirdSentence = `It has a total of ${sentenceCount} sentences in it.`;

console.log(thirdSentence);

history = history + "\n" + thirdSentence;



// Documentation -> json | https://nodejs.org/dist/latest-v14.x/docs/api/fs.html