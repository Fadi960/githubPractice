let num = 5;
function salary(num) {
    console.log(num);
    return num * .7
}
console.log(num);
setTimeout(salary, 300)
const mySalaries = [20, 30, 40, 50, 300, 400]
//mySalaries.filter(n => n > 50)
mySalaries.filter(salary)
console.log(mySalaries);

/* () => {}
   (func) => {}
   (func) => () => {}*/