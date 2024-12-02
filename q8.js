// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :
const [firstName, [secondName1, secondName2], [thirdName1, thirdName2]] = moreStudents;

console.log(firstName); 
console.log(secondName1);
console.log(secondName2); 
console.log(thirdName1); 
console.log(thirdName2); 