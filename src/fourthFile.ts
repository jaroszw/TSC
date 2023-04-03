interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Dave',
  GPA: 100,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) =>12
1  console.log(student[key as keyof typeof student])
);

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]} `);
};

logStudentKey(student, 'GPA');

//////////////////////////////
// interface Incomes {
//   [key: string]: number;
// }

// type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<'salary' | 'bonus' | 'sidehustle', number>;

const monthlyIncom: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};
