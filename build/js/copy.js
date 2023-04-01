"use strict";
// let year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear;
//First
// let year: HTMLElement | null = document.getElementById('year');
// let thisYear: string = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute('datetime', thisYear);
//   year.textContent = thisYear;
// }
//Second
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
