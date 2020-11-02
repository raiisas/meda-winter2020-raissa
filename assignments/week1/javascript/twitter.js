// customer receives free container for return a # of containers
/*  maximum number of containers a customer can receive given:
n = 4 Budget
cost = 1 Cost per container
m = 2 Empty Containers returned for a free container
EmptyContainer = Credit
*/

/*
 * Complete the 'maximumContainers' function below.
 *
 * The function accepts STRING_ARRAY scenarios as parameter.
 */

 // function and parameter
 // STEP 1 We need the function to solve different scenarios for budget, costs and number of containers returned
 // These are read as strings
 // If I weren't required to use a funciton, I'd use an if statement
 /*
 function maximumContainers(scenarios) {
 if (scenarios === "budget");{
        return main;
} else if (scenarios === "cost");{
        return main; {
} else (scenarios === "number of containers returned");
};

function maximumContainers(scenarios) {
    let n = "Budget  " + 4 + scenarios; // declare n as the budget
    let cost = "Cost " + 1 + scenarios; // declare cost as Cost per container
    let m = "Empty Containers " + 2 + scenarios;// declare m as free containers
    console.log(n + cost + m);
}
maximumContainers(10, 2, 5);
*/

// Somewhere along the line, I lost the top porton of the code. 
// I made a funciton based off of the following declarations and scenarios
// I realize this code is not correct but this is my thought process
function maximumContainers(scenarios) {
    let n = 4 + scenarios; // declare n as the budget
    let cost = 1 - scenarios; // declare cost as Cost per container
    let m = 2 + scenarios;// declare m as free containers
    console.log(n + cost + m);
}
maximumContainers(10, 2, 5);
maximumContainers(12, 4, 4);
maximumContainers(6, 2, 2);



// don't code below this line

function main() {

// don't modify code here
const scenariosCount = parseInt(readLine().trim(), 10);

    let scenarios = [];

    for (let i = 0; i < scenariosCount; i++) {
        const scenariosItem = readLine();
        scenarios.push(scenariosItem);
    }

    maximumContainers(scenarios);
}
