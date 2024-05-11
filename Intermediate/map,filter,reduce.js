// map, filter, reduce, find, flat, flatMap 
/*map:
transforms each element of the array into a new value.
filter:
creates a new array with elements that pass a certain condition.
reduce:
reduces the array to a single value by applying a function against 
an accumulator and each element.
find:
returns the first element in the array that satisfies a given condition.
flat: 
creates a new array with all sub-array elements concatenated into it recursively
up to the specified depth.
flatMap:
first maps each element using a mapping function, then flattens the result into a new array*/

//map
const items = [
    { id: 1, name: 'Apple', price: 0.5 },
    { id: 2, name: 'Banana', price: 0.3 },
    { id: 3, name: 'Orange', price: 0.7 },
    { id: 4, name: 'Pear', price: 0.6 },
  ];
  
  // map: returns a new array by transforming each element
  const itemNames = items.map(item => item.name);
  console.log('Mapped names:', itemNames);
  
// filter
//returns a new array with elements that pass the condition
const affordableItems = items.filter(item => item.price < 0.6);
console.log('Affordable items:', affordableItems);

// reduce: reduces the array to a single value
const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
console.log('Total price:', totalPrice);

// find: returns the first element that satisfies the condition
const pear = items.find(item => item.name === 'Pear');
console.log('Found pear:', pear);

// flat: flattens nested arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flat();
console.log('Flat array:', flatArray);

// flatMap: maps each element to a new array and flattens the result
const words = ['Hello', 'World'];
const charArray = words.flatMap(word => word.split(''));
console.log('Char array:', charArray);