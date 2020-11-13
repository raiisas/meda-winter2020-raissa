const fs = require("fs");
const _ = require("lodash");

let myNumber = _.random(30, 70);

let someNumber = Math.floor((Math.random * 41) + 30);

console.log(myNumber);

console.log("hello there!");
// This file is related to the package.json file. 
// BASH -> npm init creates a node. Responsible for loading packages locally
// npm install -> Install NPM website
// npm install -g -> Global and available to all packackes you create
// npm install -S -> 
// nodemon -> Not a package, it's just a tool. Ex nodemon index.js

// To Ignore files on Github
// 1. Create .gitignore file in VSC
// 2. Check BASH cmd -> ls -la
// 3. cmd nano .gitignore
// 4. Add folder you want to ignore. Ex. node_modules/
// 5. WriteOut ^O

// git reset --hard HEAD