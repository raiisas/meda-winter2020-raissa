const fs = require("fs");

let contents = fs.readFileSync("essay.txt", "utf-8");

fs.writeFileSync("exmaple2.txt", "filler text with \na new line", "utf-8"); // Overwrite/replace file with this content

fs.appendFile("exmaple2.txt", "this adds text to the end of the file", "utf-8"); // adds to the end of the file

fs.existsSync("example.txt"); // returns true because the file exist in the folder.

fs.readFile("essay.txt", "utf-8", (error, text) => {
    if (error) {
        console.log("We have an error!", error.message);
    } else {
        console.log("Reading done!", text);
    }
    console.log("done!", text);
}); // asynchronous version

console.log("program code"); // fs Documentation -> https://nodejs.org/dist/latest-v14.x/docs/api/fs.html