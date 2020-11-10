let car1 = {
    "make": "Honda",
    "year": 1998,
    "model": "Civic"
}

let car2 = {
    "year": 2010,
    "model": "Accord"
}

let car5 = {
    "year": 20100, // Ex. of common mistake -> use if statment in classes
    "model": "mustang"
}

// Signifies items Object needs to be in the same Class
class Car { // Capitalize name
    constructor(make, model, year) { // must have constructor

        if (year > 2021) {
            console.log("Are you sure that's the correct date?");
        }
        this.make = make;
        this.year = year; // statements end in ;
        this.model = model; // this represents current object -> ex. model
        this.currentFuelGallons = 0;
        this.fuelCapacity = 15;
        this.registeredDate = new Date(Date.now());
        this.expiredDate = null; // us null if don't know a value
    }

    checkFuel() {
        console.log(`The car ${this.make} ${this.model} has ${this.currentFuelGallons} gallons of gas left in the tank.`);
    }

    retire() {
        console.log();
    }

    refuel(gallons) {
        if (typeof gallons === "number") {
            
            if (gallons > this.fuelCapacity - this.currentFuelGallons) {
                console.log("There is not enough room in the tank for that many gallons! Topping off the tank instead.")
                this.currentFuelGallons = this.fuelCapacity;
                gallons = this.fuelCapacity;
            } else {
                this.currentFuelGallons = this.currentFuelGallons + gallons;
            }


            console.log("Refuel successful, added " + gallons + " to the tank.");
        } else {
            console.log("Refueling needs a valid number!");
        }
    }
}


let car3 = new Car("Tesla", "X", 2016);
let car4 = new Car("Chevy", "Bolt", 2016);
let car6 = new Car("Voltswagen", "Golf II", 19800);

car3.checkFuel();
car4.checkFuel();

car4.refuel(400);
car4.checkFuel();

// car1.checkFuel();

console.log("The car " + car4.make + car4.model + "has " + car3.currentFuelGallons + " gallons of gas left.");

// console.log(car1, car2);
// console.log(car3, car4);