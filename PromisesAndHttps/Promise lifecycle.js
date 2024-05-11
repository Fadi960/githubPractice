// Promise Lifecycle
// we use promise for parallel execution
// asynchronously

let promise = new Promise(function(resolve,reject){
    resolve(56)  // promise will be resolved
    console.log("I am an alert in promise");
})

console.log("Hello World");
  setTimeout(function(){
    console.log("Hello in 4 sec");
  },4000)

  console.log("My name is" + "Fahad");
  console.log(promise);

