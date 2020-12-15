const fs = require("fs");
// const { title } = require("process");
const helpers = require("./helpers.js");
const Title = require("./Title.js");

// Read in our dataset.
const data = fs.readFileSync("Hourly_Rate.csv", "utf-8");

// Split up the string into an Array, each array element holds an entry.
const dataArray = data.split("\n");

// Removed unecessary lines.
dataArray.shift();
dataArray.pop();

for (let i = 0; i < dataArray.length; i++) {
    let entry = dataArray[i].split('"');
    let fixedEntry = helpers.checkTitleCommas(entry);
}

// Original location of Title.js Object

console.log(dataArray[0]);

let example = dataArray[945].split(",");

example = checkTitleCommas(example);

// console.log(example);

// console.log(dataArray[0]);
// console.log(dataArray[dataArray.length - 1]); // how to get the last number

// console.log(dataArray.length);

// example[3] = example[3] = example[4];

// example.splice(4, 1); // to get rid of commas

// console.log (example);

let exampleObject = new Title(example[1], example[2], example[3], example[4], example[5], parseInt(example[7]), parseInt(example[8]));

console.log(exampleObject);


// Question 1 START
console.log("What union has the most members?");

// Question 1 END


module.exports = checkTitleCommas;