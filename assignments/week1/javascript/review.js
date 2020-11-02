/* console.log("Hello there!");
// nodejs.org, click lts, double click file, click next on everything.
// nodejs runs in the terminal Ex. cd javascript, $ ls, review.js, $ node review.js Hello there!

let myFirstVariable = 10;
myFirstVariable;

var myFirstGloballyScopedVar = 11;

for (let i = 0; i < 0; i = i + 1){

    setTimeout(function () {
        console.log (i);
    }, 2000);
}


// let is local and var is global
// const will not allow someone to rewrite code | useful for security if code needs to go to a specific website


const masterKey = "http://www.website.com/data";
// Someone writes the below code to put malicisous files in the webiste
// masterKey = "http://malicioussite.com";

// Const is used for something that never should change like the order of the Months. 
const january = 1;
const february = 2;


// Logical Statements

if (january === 3) {
    console.log("January is the 3rd month");
} else if (february === 2) {
}else {
    console.log("January is NOT the 3rd month");
}

if (february === 2) {}

// === means comparing data AND datatype
// Ex. 1 == "1" this is TRUE
// Ex. 1 === "1" this is FALSE

// else if statement is used if we're asking another question on the same data


// Loops

// Loops

while (false) {}

// do while does the same as while but runs the code once and if true it runs it a second time

do {

} while (false);

// For Loop
for (let i = 0; true; i++) {

}

// Functions

function myFunction(parameter1, parameter2) {
    console.log(arguments[2]);
    console.log(parameter1);

    return "hello";
}

myFunction(argument1, argument2, argument3);
myFunction("1", true, 400);

// Callback Function (Anonymous too) -- it's like a calback from customer service --
setTimeout(function(weNeedData) {
    console.log(weNeedData);
}, 1000);

// Arrow Fuction
// A way of writing concise function
// Arrow Functions -- similar and faster than a callback function -- 
setTimeout(() => {}, 1000);

// Arrow Function -does the same thing as top example --
setTimeout(weNeedData => console.log(weNeedData), 1000);

// Arrow Function with block of code -- for mutiple statements --
setTimeout(weNeedData => {
    console.log(weNeedData)
    console.log();
}, 1000);
*/
// Type Coercion
// Where Javascript converts one datatype to another automatically
// 100 === "100" // The string will try to be converted to a number
/* 
console.log(100 == "100");
console.log(100 === "100");

// Type Coercion into Booleans
// Falsys
0;
-0;
"";
undefinied;
NaN; // Does not convert to a boolean, need to use isNaN() function
null;

if (userInput)) {
    console.log("This value is true");
} else {
    console.log("This value is false");
}

// Manual Type Conversion

parseInt(); // takes the String argument and converts it to antoher

parseInt(100.100); // Becomes 100
parseFloat("100.100"); // Becomes 100.1

january.toString(); // .toString takes number from variable or property and converts to a string

// myArray.toString();

// Logical and Comparison

Values

==
===
>
<
>=
<=
!=
!==

// Numeric
+
_
*
/
%

+=
-+
*=
/*


// Comparisons
&&
||
!

*/

// Object nad Arrays

let myArray = [1, 2, 3, 4];

myArray[3];
myArray[0] = 100;
myArray[17] = 9;

// add to end and beginning
myArray.push(); 
myArray.unshift(); 
// remove to end and beginning
myArray.pop();
myArray.shift();

let myObject = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3,
    fourthNum: 4, 
}

myObject.firstNum; // calling an object
myObject["second num"] // calling an object if there's a space

let myAssignedFunc = function () {};

let myObjectWithFunction = {
    funcName: () => {console.log("hello there")}
}

let myObjectWithFunction.funcName()

// free code camp

if (i = 3 * 5) {
    return "FizzBuzz";
} else if (i * 5) {
    return "Buzz";
  } else {
    return i;
  }

  // if i = 3 * 5 then print FizzBuzz
// if i = * 5 then print  Buzz
// if i = neither 3 * 5 then print the value of i 

