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

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "Adekunte", lastName: "Tolu" }));


// Interface describing the class instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}


class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass("David", "Ola");
console.log(student1.displayName());
console.log(student1.workOnHomework());
