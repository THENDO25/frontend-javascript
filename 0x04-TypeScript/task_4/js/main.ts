import { Teacher } from './Subjects/Teacher';
import { Cpp } from './Subjects/Cpp';
import { Java } from './Subjects/Java';
import { React } from './Subjects/React';

export const cpp: Cpp = new Cpp();
export const java: Java = new Java();
export const react: React = new React();

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());