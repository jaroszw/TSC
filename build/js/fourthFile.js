"use strict";
// Index Signatures
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
const todaysTransactions = {
    Pizza: 10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40;
///////////////////////////////////////////////
console.log(todaysTransactions["Dave"]);
const student = {
    name: " Dave",
    GPA: 3.5,
    classes: [100, 200],
};
//console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
logStudentKey(student, "name");
// type Incomes = Record<string, number>;
const monthlyIncome = {
    salary: 200,
    bonus: 300,
    sidehoustle: 500,
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
// with record utility type we cannot loop through object as using index signature inside interface, we need to use assertion, even though we described everything using Recored utility type
