// Javascript doesn't have a way to read or write files
// JS in the backend Node is running the JS in the backend

// process.argv -> Property of the process object everytime you run something in node 
process.argv; // This is an Array

// check this in node and notice the info it outputs | this is how we pass info to from node to our JS
let arguments = process.argv;

console.log(arguments); // process.argv is communicating with node