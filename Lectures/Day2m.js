// map
let array=[1,2,3,4,5]
let forEach_result = array.forEach((item,index,arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`); // item= value index=indices of array
    return item * 2;   // array= refernce 
})
console.log(`Actual Array: $[array]`);
console.log(`Result: ${forEach_result}`);

let result = array.map((item, index, arr) => {
    console.log(`Item: ${item}, Index:${index}, Array: ${arr}`);
    return item * 2;
});

console.log(`Actual Array: ${array}`);
console.log(`Result: ${result}`);