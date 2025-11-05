interface Directors extends Teacher {
  numberOfReports: number;
}

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Adedeji',
  fullTimeEmployee: false,
  lastName: 'Afolabi',
  location: 'Ibadan',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'Adekunte',
  lastName: 'Tolulope',
  location: 'Abuja',
  fullTimeEmployee: true,
  numberOfReports: 17,
};