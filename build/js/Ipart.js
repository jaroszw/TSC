"use strict";
// 'use strict';
// // FIRST CHAPTER - TSC config
// // SECOND CHAPTER
// // let myName: string = 'Dave';
// // let meaningOfLIfe: number;
// // let isLoading: boolean;
// // let album: any;
// // myName = 'John';
// // meaningOfLIfe = 42;
// // isLoading = true;
// // album = 5150;
// // const sum = (a: number, b: string) => {
// //   return a + b;
// // };
// // let postId: string | number;
// // let isActive: number | boolean | string;
// // let re: RegExp = /\w+/g;
// //THIRD CHAPETR
// let stringArr: string[] = ['one', 'hey', 'Dave'];
// let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150];
// let mixedData = ['EVH', 1984, true];
// stringArr[0] = 'John';
// stringArr.push('hey');
// guitars[0] = 1984;
// guitars.unshift('Jim');
// // stringArr = guitars;
// guitars = stringArr;
// let test = [];
// let bands = [];
// bands.push('Van Halen');
// //Tuple - position attached types
// let myTuple = ['Dave', 42, true];
// let mixed = ['John', 1, false];
// mixed = myTuple;
// // myTuple = mixed;
// myTuple[1] = 42;
// // Objects
// let myObj;
// myObj = [];
// console.log(typeof myObj);
// myObj = bands;
// myObj = {};
// const exampleObj = {
//   prop1: 'Dave',
//   porp2: true,
// };
// interface Guitarist {
//   name: string;
//   active?: boolean;
//   albums: (number | string)[];
// }
// // exampleObj.prop2 = false;
// exampleObj.prop1 = 'John';
// let evh: Guitarist = {
//   name: 'Eddie',
//   active: false,
//   albums: [1984, 5150, 'OU812'],
// };
// let jp: Guitarist = {
//   name: 'Jimmie',
//   albums: ['I', 'II', 'IV'],
// };
// // evh.years = 40 // nie można dodać właściwości do obiektu z typem
// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hello ${guitarist.name.toUpperCase()}`;
//   }
//   return `Hello`;
// };
// console.log(greetGuitarist(jp));
// //Enums
// enum Grade {
//   U = 3,
//   D,
//   C,
//   B,
//   A,
// }
// console.log(Grade.A);
// // Type Aliases
// type stringOrNumber = string | number;
// type stringOrNumberArray = (string | number)[];
// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: stringOrNumberArray;
// };
// let hammet: Guitarist = {
//   name: 'Hammet',
//   active: true,
//   albums: ['black', 'kill em all'],
// };
// type UserId = stringOrNumber;
// console.log(hammet);
