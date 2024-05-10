// this in simple function
function greet() {
    console.log("Hello, " + this.name);
  }
  
  const person = {
    name: "Alice",
    greet: greet
  };
  
  person.greet();

  // this in arrow function
  const greet2 = () => {
    console.log("Hello, " + this.name2);
  };
  
  const person2 = {
    name2: "Alice",
    greet2: greet2
  };
  
  person2.greet2();  // output undefined because of global scope
  
  // another example
  function outerFunction() {
    this.name = "Bob";
    
    const innerFunction = () => {
      console.log("Hello, " + this.name);
    };
    
    innerFunction();
  }
  
  outerFunction(); 
  
  