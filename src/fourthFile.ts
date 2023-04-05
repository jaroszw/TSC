// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number | undefined;
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: 10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj) => {
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
// object will returnb undefined

/////////////////////////////////

interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: [100, 200];
}

const student: Student = {
  name: " Dave",
  GPA: 3.5,
  classes: [100, 200],
};

//console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");
logStudentKey(student, "name");

/////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

// interface Incomes {
//   [key: "salary" | "bonus" | "sidehoustle"]: number;
// }
// key cannot be literal SVGUnitTypes, we can implement literal types as key with utility type record

type Streams = "salary" | "bonus" | "sidehoustle";

// type Incomes = Record<"salary" | "bonus" | "sidehoustle", number>;
type Incomes = Record<Streams, number>;
// type Incomes = Record<string, number>;

const monthlyIncome: Incomes = {
  salary: 200,
  bonus: 300,
  sidehoustle: 500,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof Incomes]);
}

// with record utility type we cannot loop through object as using index signature inside interface, we need to use assertion, even though we described everything using Recored utility type
