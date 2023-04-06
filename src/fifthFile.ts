// const stringEcho = (arg: string): string => arg;
// // 'reserved just for string parameters

// const Echo = <T>(arg: T): T => arg;
// // Overall syntax for generic parameters

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj(true));
// console.log(isObj("John"));
// console.log(isObj([1, 2, 3]));
// console.log(isObj({ name: "John" }));
// console.log(isObj(null));
///////////////////////////////////

// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) {
//     return { arg, is: false };
//   }

//   if (isObj(arg) && !Object.keys(arg as keyof T).length)
//     return { arg, is: false };

//   return { arg, is: !!arg };
// };

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue("Dave"));
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({}));
// console.log(isTrue({ name: "Dave" }));
// console.log(isTrue([]));
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));
//////////////////////////////

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length)
    return { value: arg, is: false };

  return { value: arg, is: !!arg };
};

// console.log(checkBoolValue(false));
// console.log(checkBoolValue(0));
// console.log(checkBoolValue(true));
// console.log(checkBoolValue(1));
// console.log(checkBoolValue("Dave"));
// console.log(checkBoolValue(""));
// console.log(checkBoolValue(null));
// console.log(checkBoolValue(undefined));
// console.log(checkBoolValue({}));
// console.log(checkBoolValue({ name: "Dave" }));
// console.log(checkBoolValue([]));
// console.log(checkBoolValue([1, 2, 3]));
// console.log(checkBoolValue(NaN));
// console.log(checkBoolValue(-0));

/////////////////////////////////////////

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  //process the user with logic here

  return user;
};

console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: "Dave" }));
///////

const getUserProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUserProperty(usersArray, "email"));
console.log(getUserProperty(usersArray, "username"));

/////////////////////////////////

class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject({ name: "Dave" });
store.state = { name: "John " };
console.log(store.state);
// store.state = 12;

// envoking new class object with given value, TS infere that this is a type of our state and it is not accept another type

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 43, true];
console.log(myState.state);

// exercise object interface
interface Software {
  name: string;
  age: number;
  stack: string[];
}

const nextState = new StateObject<Software>({
  name: "John",
  age: 34,
  stack: ["JS", "Node"],
});

console.log(nextState.state);
nextState.state = {
  name: "Tom",
  age: 28,
  stack: ["JS", "Node"],
};
console.log(nextState.state);
