// type stringOrNumberArray = (string | number)[];

// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: stringOrNumberArray;
// };

// // literal types

// let myName: 'Wojtek';
// let userName: 'Dave' | 'Johyn' | 'Amy';

// userName = 'Amy';

// // Functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMsg = (message: any) => {
//   console.log(message);
// };

// logMsg('Hello');
// logMsg(add(2, 3));

// let subtrack = function (c: number, d: number): number {
//   return c - d;
// };

// type mathFunction = (a: number, b: number) => number;

// // interface mathFunction {
// //   (a: number, b: number): number;
// // }

// // difference between interface and type is abowe

// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// // optinoal parameters

// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== 'undefined') {
//     return a + b + c;
//   }

//   return a + b;
// };

// // function with optional parameter need to be guarded with condition,otherway typescript will be complaining

// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// //...with c beeing default value we need no guard
// // function alias can't be be used with default values in function

// logMsg(addAll(1, 2, 10));
// logMsg(addAll(1, 2, undefined));
// logMsg(sumAll(1, 2, undefined));
// logMsg(sumAll(undefined, 2));

// // Rest param

// const total = (a: number, ...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr);
// };

// // rest param is put as numbers, it can represent as many parameters as we want

// logMsg(total(10, 20, 30, 40));

// // NEVER TYPE
// const createError = (errMsg: string) => {
//   throw new Error(errMsg);
// };

// logMsg(createError('this is a created error'));

// const infinite = () => {
//   let i: number = 1;

//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };

// // never type is thrown with error or endless loop

// //custom type guard
// const isNumber = (value: any): boolean => {
//   return typeof value === 'number' ? true : false;
// };

// //use of the never type
// const numberOrString = (value: number | string): string => {
//   if (typeof value === 'string') return 'string';
//   if (isNumber(value)) return 'number';

//   return createError('this should never happen');
// };

// // TYPE ASSERTIONS  =  TYPE CASTING

type One = string;
type Two = string | number;
type Three = "hello";

// converty to more or less psecific

let a: One = "Good"; // === let a = <One>'Good';
let b = a as Two; // less specific
let c = a as Three; // more specific

// Not possible in React
let d = <One>"word";
let e = <string | number>"word";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
let myNextVal: number = addOrConcat(2, 2, "concat") as number;
// Typescript sees no problem here - but a string is returned

// The DOM
// const img = document.getElementById('img');
const img = document.getElementById("img") as HTMLImageElement;
// we know that thgis is an HTML img element and that this is not null but TSC doesnt know thatand doesnt know wether there is src atribute

const img2 = document.getElementsByTagName("img")!;
console.log(img2);
//We show that this element is not null and TSC sees that this is HTML element, but src may be null

const myImg = document.getElementById("img")! as HTMLImageElement;
// with only ! TSC will know that this is not empty but will not ghet the type of an element

const nextImg = <HTMLImageElement>document.getElementById("img");
// Other way to implicitly indicate to TSC type of an element but it will not work in Recat

// img.src;
// myImg.src;
