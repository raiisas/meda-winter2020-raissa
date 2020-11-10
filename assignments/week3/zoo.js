class Animal {
    constructor(alive) {
        this.living = alive;
    }
}

class Mammal extends Animal { // Parent Class
    constructor(alive) {
        super(alive); // Method for inheritance 
        this.tail = 1;
        this.type = "mammal";
        this.eyes = 2;
    }
    eat() { // Derived a method to make sure things are running properly
        if ("name" in this) {
            console.log(this.name + "eats some food."); // Calling this.name method
        } else {
            console.log("Animal eats some food");
        } 
    }
}

class Dog extends Mammal { // Bring Mammal into Dog child class with keyword: extends
    constructor(dogName, alive) {
        // This function runs the constructor of the class we are inheriting, it is important to run it first before any other lines of your Dog constructor class.
       super(alive); // Method called super 
       this.legs = 4; 
       this.name = dogName; // refers to eat method
    }
    bark() {
        console.log("woof, woof");
    }
}


class Cat extends Mammal { // Child Class
    constructor(catName, alive) {
        super(alive);
        this.legs = 4;
        this.name = catName; // refers to eat method
    }
    meow() {
        console.log("meow!");
    }
}

let animal1 = new Dog("Fido ", true); // new is used to create an Object from a class
animal1.bark();
animal1.eat();
console.log(animal1.living);

let animal2 = new Cat ("Garfield ", true);
animal2.meow();
animal2.eat();
console.log(animal2.living);


// Classes are a template for creating objects. They encapsulate data with code to work on that data. -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Polymorphism -> https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8

// SF Data Website https://datasf.org/