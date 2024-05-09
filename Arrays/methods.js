// push,pop,shift,unshift,indexof,includes

// push

let fruits = ["apple","banana","kiwi"]
console.log(fruits);
fruits.push("orange")
console.log(fruits);

// pop

let fruits2 = ["apple","banana", "kiwi"]
console.log(fruits2);
fruits2.pop();
console.log(fruits2);

// shift  (remove the first element from an array)

let arr = [1,2,3]
console.log(arr);
let removeElement = arr.shift();
console.log(arr);

// unshift  (add one or more element to the beginning of an array)
let arr2 = [2,3]
console.log(arr2);
let addElement = arr.unshift(1)
console.log(arr);

// indexOf

const superheroes = ["spiderman", "superman", "batman","deadpool"]
console.log(superheroes);
let index = superheroes.indexOf("superman");
console.log(index);

// includes

let languages = ["Javascript", "Java", "C++"]
let check = languages.includes("Java");
console.log(check);
let check2 = languages.includes("Python")
console.log(check2);