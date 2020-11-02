/*
function slotWheels(history) {
    // Write your code here

}
*/


function slotWheels(history) {
  return Math.floor(Math.random() * Math.floor(history*4)); // *4 -> number of wheels
  }
  console.log(slotWheels(2)); // index of 0 this is the number of stops
  console.log(Math.random()); // testing out this output
  console.log(Math.floor(4)); // testing out this output

// puesdo-code -> the number of wheels determines the number of outputs
// history is not definted so I'm using a randome number to generattion


