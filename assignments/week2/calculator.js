// Excercise to determine if a String was converted to a Number
let arguments  = process.argv;
// console.log(arguments);

let number1 = arguments[2]; // undefined
let mathOperator = arguments[3];
let number2 = arguments[4]; // undfined

// default is a string so convert it to a number with parseInt
num1Converted = parseInt(number1); // Convert to number
num2Converted = parseInt(number2); // Convert to number

// is num1Converted or num2Converted a number
if (isNaN(num1Converted) || isNaN(num2Converted)) {
    console.log("Error 3443259 The first or second number is not an actual number! Try Again.")
} else { 
    // in node, input a number like 2 and 10
    console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted + num2Converted}`); // String liters needs `back ticks
    //onsole.log(num1Converted + num2Converted); 
} if (mathOperator === "-") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted - num2Converted}.`);
    } else if (mathOperator === "x") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted * num2Converted}.`);
    } else if if (mathOperator === "division") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted / num2Converted}.`);

    // return; kill the program 
}

// console.log(num1Converted + num2Converted); // Run this in node with 100 300

// console.log(typeof num1Converted, typeof num2Converted); // typeof will give a string of data type

// String literals




