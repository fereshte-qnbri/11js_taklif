// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/


const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
  };
  const valuesArray1 = Object.values(object1);
  console.log(valuesArray1); 

  const valuesArray2 = [];
  for (const key in object1) {
    valuesArray2.push(object1[key]);
  }
  console.log(valuesArray2);