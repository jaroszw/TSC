"use strict";
// type stringOrNumberArray = (string | number)[];
// converty to more or less psecific
let a = 'Good'; // === let a = <One>'Good';
let b = a; // less specific
let c = a; // more specific
// Not possible in React
let d = 'word';
let e = 'word';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let myNextVal = addOrConcat(2, 2, 'concat');
// Typescript sees no problem here - but a string is returned
// The DOM
// const img = document.getElementById('img');
const img = document.getElementById('img');
// we know that thgis is an HTML img element and that this is not null but TSC doesnt know thatand doesnt know wether there is src atribute
const img2 = document.getElementsByTagName('img');
console.log(img2);
//We show that this element is not null and TSC sees that this is HTML element, but src may be null
const myImg = document.getElementById('img');
// with only ! TSC will know that this is not empty but will not ghet the type of an element
const nextImg = document.getElementById('img');
// Other way to implicitly indicate to TSC type of an element but it will not work in Recat
// img.src;
// myImg.src;
