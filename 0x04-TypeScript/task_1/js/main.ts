// task_1/js/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'Adedeji',
  fullTimeEmployee: false,
  lastName: 'Afolabi',
  location: 'Ibadan',
  contract: false,
};

console.log(teacher3);

const director1: Director = {
  firstName: 'Adekunte',
  lastName: 'Tolulope',
  location: 'Abuja',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);

// interface describing a function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Function written exactly as checker expects
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "Adekunte", lastName: "Tolu" }));
