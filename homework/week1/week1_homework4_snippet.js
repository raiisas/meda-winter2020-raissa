// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    // let is a variable with a name of product, it's value is multiplying the two arguments in myFunction
    let product = option * option2;

    // Asking the console to call the result of the product
    console.log(product);

    // Similar to above but this time you're asking the console to send a message to the console with a string with the result of argument 1
    console.log("The value of the option parameter is " + option);

    // if statement | option is the same as 0
    if (option === 0) {
        
        // returning the result of option if the if statement is true or is the same as 0
        return "Everything is good!";
    // Basically, if option is the same as 1 then the above if statement is false
    } else if (option === 1) {
        
        // This is the message that will be returned if option 1 is the same as 1
        return "An error happened!";
    // if option is the same as -1 another result will happen
    } else if (option === -1) {
        
        // Return the string value if option is the same as -1 | return kills the esle if statement
        return "Everything is bad!";
    }

}

// a variable is being declared and myFunction is given an Argument of 1, 11 = 11
let result = myFunction(1, 11);
// variable result 2 is declared and is given a different Argument in myFunction = 400
let result2 = myFunction(2, 200);

// the if statement has an AND operator to see if result and result are the same?
if ( result === "An error happened" && result2 === "An error happened") {

    // If they are the same then the string "Catastrophic failure" will message on the console
    console.log("Catastrophic failure.");

}