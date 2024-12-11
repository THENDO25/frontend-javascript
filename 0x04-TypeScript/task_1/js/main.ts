interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  class StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student = new StudentClass('John', 'Doe');
  console.log(teacher3);
  console.log(director1);
  console.log(printTeacher(director1.firstName, director1.lastName)); // J. Doe
  console.log(student.workOnHomework()); // Currently working
  console.log(student.displayName()); // John