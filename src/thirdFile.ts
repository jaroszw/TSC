class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Wojtek = new Coder("Wojtek", "Rock", 42, "Tyoescript");
console.log(Wojtek.getAge());
// console.log(Wojtek.age);
// console.log(Wojtek.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Disco", 35);
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);
////////////////////////////////////////////////////////////

interface Musican {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musican {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimi", "guitar");
console.log(Page.play("strums"));
//////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }

  static getCount(): number {
    console.log(Peeps.count);
    return Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);

//////////////////////////////////////////////////////////////
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil young", "Lewd Zep"];
console.log(MyBands.data);

MyBands.data = [...MyBands.data, "Metallica"];
// MyBands.data = ['Metallica', 12324];
console.log(MyBands.data);
