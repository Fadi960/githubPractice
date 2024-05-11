// call, apply and bind method
/* call and apply are used to invoke a function with a specific context, 
where call accepts arguments individually, and apply accepts arguments as an array.
 bind creates a new function with a fixed this value, which can be called later */
// call

let name = {
    firstname: "Fahad",
    lastname: "Ahmed"
}
let printFullName = function () {
    console.log(this.firstname + "" + this.lastname);
}
printFullName.call(name);

let name2 = {
    firstname: "Qasim",
    lastname: "Ahmed"
}
printFullName.call(name2)

// bind
let name3 = {
    firstname: "Nawaz",
    lastname: "Ahmed"
}
let printFullName1 = function () {
    console.log(this.firstname + " " + this.lastname);
}

// Using bind
let printFahadFullName = printFullName.bind(name3);
printFahadFullName(); 

let name4 = {
    firstname: "Ali",
    lastname: "Ahmed"
}

let printQasimFullName = printFullName.bind(name4);
printQasimFullName(); 

// apply
let name5 = {
    firstname: "Ahad",
    lastname: "Ahmed"
};

let printFullName2 = function () {
    console.log(this.firstname + " " + this.lastname);
};

// Using apply
printFullName.apply(name5); 

let name6 = {
    firstname: "Salman",
    lastname: "Ahmed"
};

printFullName.apply(name6); 
