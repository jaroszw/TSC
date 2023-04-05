"use strict";
class Car {
    constructor(name, engine, fuel) {
        this.name = name;
        this.engine = engine;
        this.fuel = fuel;
        this.name = name;
        this.engine = engine;
        this.fuel = fuel;
    }
    displayCar() {
        return `This car is ${this.name} and is ${this.fuel} with ${this.engine} engine `;
    }
}
const audi = new Car("blue", 2, "PB");
class MilitaryCar extends Car {
    constructor(armour, name, engine, fuel) {
        super(name, engine, fuel);
        this.armour = armour;
        this.armour = armour;
    }
    displayArmor() {
        return `This car named ${this.name} has ${this.armour}`;
    }
}
const BP = new MilitaryCar("Hevy gun", "Hummer", 4.0, "disel");
console.log(BP.displayArmor());
class SoftwareHouse {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    displayOffer(salary) {
        return `${this.name} employes on the position of ${this.position} with salary of ${salary} `;
    }
}
const jobOffer = new SoftwareHouse("Asseco", "frontEndDev");
console.log(jobOffer.displayOffer(2000));
//////////////////////////////////////////////
class Bandits {
    constructor() {
        this.dataSet = [];
    }
    get data() {
        return this.dataSet;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataSet = value;
        }
        else {
            throw new Error("Params is not an array of strings");
        }
    }
}
const myBandits = new Bandits();
console.log(myBandits);
myBandits.data = ["Joe", "Doe", "Jack"];
console.log(myBandits);
myBandits.data = [...myBandits.data, "Sam"];
console.log(myBandits);
///////////////////////////////////
class Peepsi {
    static getCount() {
        return Peepsi.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peepsi.count;
    }
}
Peepsi.count = 0;
const Joe = new Peepsi("Joe");
const Doe = new Peepsi("Doe");
const Sam = new Peepsi("Sam");
console.log(Joe.id);
console.log(Doe.id);
console.log(Sam.id);
console.log(Peepsi.getCount());
