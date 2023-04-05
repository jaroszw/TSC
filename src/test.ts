class Car {
  constructor(
    public name: string,
    private engine: number,
    protected fuel: string
  ) {
    this.name = name;
    this.engine = engine;
    this.fuel = fuel;
  }

  public displayCar() {
    return `This car is ${this.name} and is ${this.fuel} with ${this.engine} engine `;
  }
}

const audi = new Car("blue", 2, "PB");

class MilitaryCar extends Car {
  constructor(
    public armour: string,
    name: string,
    engine: number,
    fuel: string
  ) {
    super(name, engine, fuel);
    this.armour = armour;
  }

  public displayArmor() {
    return `This car named ${this.name} has ${this.armour}`;
  }
}

const BP = new MilitaryCar("Hevy gun", "Hummer", 4.0, "disel");

console.log(BP.displayArmor());
//////////////////////////////////
interface Employer {
  name: string;
  position: string;
  displayOffer(salary: number): string;
}

class SoftwareHouse implements Employer {
  name: string;
  position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  public displayOffer(salary: number): string {
    return `${this.name} employes on the position of ${this.position} with salary of ${salary} `;
  }
}

const jobOffer = new SoftwareHouse("Asseco", "frontEndDev");
console.log(jobOffer.displayOffer(2000));
//////////////////////////////////////////////
class Bandits {
  private dataSet: string[];

  constructor() {
    this.dataSet = [];
  }

  public get data(): string[] {
    return this.dataSet;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataSet = value;
    } else {
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
  static count: number = 0;
  public id: number;

  static getCount() {
    return Peepsi.count;
  }

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peepsi.count;
  }
}

const Joe = new Peepsi("Joe");
const Doe = new Peepsi("Doe");
const Sam = new Peepsi("Sam");
console.log(Joe.id);
console.log(Doe.id);
console.log(Sam.id);
console.log(Peepsi.getCount());
