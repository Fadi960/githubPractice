// pass by value
// primitive datatype is pass by value
let primitive = 10;
let anotherPrimitive = primitive;
primitive = 20;
console.log(primitive);
console.log(anotherPrimitive);

// pass by reference
// non primitive is pass by reference
let obj = {value: 10};
let anotherObj = obj;
obj.value = 20;
console.log(obj.value);
console.log(anotherObj.value);
