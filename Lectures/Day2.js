// rest operator

/*const array = [1,2,3,4,5]
const array2 = [1,2,3]
const [a,b] = array2;
const [a,...b] = array;
console.log(array);
console.log(array2);*/

// spread operator
//const array3 = []

let a = 1;
let b = 2;

function myFunction(a,...b) {
    a=[1];
    b=[2,3,4];
    return a,b;
}
console.log(a);
console.log(b);