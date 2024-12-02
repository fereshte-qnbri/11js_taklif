// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
  ali: 'name',
  writes: 'does what',
  novels: 'kind of book',
};

let sentence = '';
for (const key in object1) {
  sentence += key + ' ';
}

sentence = sentence.trim(); 
console.log(sentence);
// output => 'ali writes novels'
