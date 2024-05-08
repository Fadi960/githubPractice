function sum(x = 3, y = 5) {
    // return sum
    return x + y;
}
var result = sum(5, 15);
console.log(`Sum of 5 and 15: ${result}`);
result = sum(7);
console.log(`Sum of 7 and default value (5): ${result}`);
result = sum();
console.log(`Sum of default values (3 and 5): ${result}`);