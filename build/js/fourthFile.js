"use strict";
const student = {
    name: 'Dave',
    GPA: 100,
    classes: [100, 200],
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => console.log(student[key]));
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]} `);
};
logStudentKey(student, 'GPA');
const monthlyIncom = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
