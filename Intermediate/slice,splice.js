// array properties
// slice,splice,reverse,concat,sort,join
// slice
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Returns a shallow copy of a portion of an array into a new array
const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); 

// splice
const fruits2 = ['apple', 'banana', 'cherry', 'date','elderberry'];
const slicedFruits2 = fruits2.splice(1, 3);
console.log(slicedFruits2);

// reverse
const fruits3 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Reverses the order of elements in the array
fruits3.reverse();

console.log(fruits3);

// concat
const fruits4 = ['apple', 'banana'];
const moreFruits = ['cherry', 'date'];

// Concatenates two or more arrays
const allFruits = fruits4.concat(moreFruits);
console.log(fruits4);
console.log(moreFruits);
console.log(allFruits); 

//sort
const fruits5 = ['banana', 'cherry', 'apple', 'date', 'elderberry'];

// Sorts the elements of an array in place and returns the sorted array
fruits.sort();

console.log(fruits); //sort alphabetically

// join
const fruits6 = ['apple', 'banana', 'cherry'];

// Joins all elements of an array into a string, separated by the specified separator
const fruitString = fruits6.join(', ');

console.log(fruitString); 
