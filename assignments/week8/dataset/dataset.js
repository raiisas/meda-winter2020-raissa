const fs = require("fs");
const helpers = require("./helpers.js");
const Title = require("./Title.js");

// Read in our dataset.
const data = fs.readFileSync("Hourly_Rate.csv", "utf-8");

// Split up the string into an Array, each array element holds an entry.
const dataArray = data.split("\n");

// Removed unecessary lines.
dataArray.shift();
dataArray.pop();

titleArray = [];

for (let i = 0; i < dataArray.length; i++) {
    let entry = dataArray[i].split(",");
    let fixedEntry = helpers.checkTitleCommas(entry);
    let entryTitleObject = new Title(fixedEntry[1], fixedEntry[2], fixedEntry[3], fixedEntry[4], fixedEntry[5], parseInt(fixedEntry[7]), parseInt(fixedEntry[8]));

    titleArray.push(entryTitleObject);
}


// Figure out how to "fix" titles with commas in it, Using positive lookahead.


// Question 1 START
console.log("What Union has the most members?");

let unions = {};

titleArray.forEach(function (element) {
    let currentUnion = element.unionCode.toString();
    let currentYear = element.year;
    let currentYearArray = currentYear.split("/");

    if (currentYearArray[0] === "2018") {
        if (unions[currentUnion] === undefined) {
            unions[currentUnion] = 1;
        } else {
            unions[currentUnion] += 1;
        }
    }
});

let highestUnionMemberCount = 0;
let highestUnionCode = null;

for (let i in unions) {
    if (unions[i] > highestUnionMemberCount) {
        highestUnionMemberCount = unions[i];
        highestUnionCode = i;
    }
}

console.log(`The Union with code ${highestUnionCode} has a member count of ${highestUnionMemberCount}. for the year 2018.`);

// Question 1 END

// Question 2 START
console.log("What Job Title pays the most within in each union code?");

let highestUnionPay = [];

/* 

[
    {
        unionCode: 352,
        highest: 12574,
        title: "Chief of Department"
    }, 

    {
        unionCode: 220,
        highest: 6808,
        title: "Law Librarian"
    }
]

*/
titleArray.forEach(function (job) {

    let jobYear = job.year.split("/")[0];

    if (jobYear === "2018"); {

        highestUnionPay.forEach(function (unionCounter) {

            if (unionCounter.unionCode === job.unionCode) {

                if (job.biWeeklyAvg > unionCounter.highest) {
                    unionCounter.highest = job.biWeeklyAvg;
                    unionCounter.title = job.title
                }
            }

        });

        highestUnionPay.push({
            unionCode: job.unionCode, 
            highest: job.biWeeklyAvg,
            title: job.title
        });

    }

});
// console.log(highestUnionPay);

// Question 2 END