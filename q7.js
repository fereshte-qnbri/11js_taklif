// ? 7. Using Array Destructuring, get the last name from the array.
//  todo : notice that 'Christina' is firstName , 'Jon' is middleName , 'Alexandare' is lastName.

const students = ['Christina', 'Jon', 'Alexandare'];

const [...lastName] = students;

console.log(lastName);

// ! Answer

// true Answer✔👇👇👇

const studentss = ['Christina', 'Jon', 'Alexandare'];

const [, ,...firstName] = studentss;

console.log(firstName);