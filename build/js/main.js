"use strict";
// FIRST CHAPTER - TSC config
// SECOND CHAPTER
// let myName: string = "Dave";
// let meaningOfLIfe: number;
// let isLoading: boolean;
// let album: any;
// myName = "John";
// meaningOfLIfe = 42;
// isLoading = true;
// album = 5150;
// const sum = (a: number, b: string) => {
//   return a + b;
// };
// let postId: string | number;
// let isActive: number | boolean | string;
// let re: RegExp = /\w+/g;
//THIRD CHAPETR
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
// stringArr = guitars;
guitars = stringArr;
let test = [];
let bands = [];
bands.push("Van Halen");
//Tuple - position attached types
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
mixed = myTuple;
// myTuple = mixed;
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    porp2: true,
};
// exampleObj.prop2 = false;
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmie",
    albums: ["I", "II", "IV"],
};
// evh.years = 40 // nie można dodać właściwości do obiektu z typem
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
