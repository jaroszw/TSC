// Utility

// PARTIALS

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "final  project ",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
/////////////////////////////

// REQUIRED READONLY

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database

  return assign;
};

const assignmentVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

// RECORD
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 87, assign2: 15 },
};

// PICK AND OMIT

// -PICK;
type AssigntResult = Pick<Assignment, "studentId" | "grade">;
const score: AssigntResult = {
  studentId: "k123",
  grade: 85,
};

// -OMIT;
type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
  // verified: true,
};

// EXCLUDE AND EXTRACT
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B">;

// NONULLABLE
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// RETURNTYPE

// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;
const tsAssign: newAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// PARAMETERS

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// AWAITED - helps us with the ReturnTYpe of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });

  return data;
};

type FetchUsersRetuirnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((res) => console.log(res));
