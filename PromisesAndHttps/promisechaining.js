// promise chaining
let p1 = new Promise ((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and iam fullfilled");
        resolve(true)
    },4000)
})
console.log(p1);

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=> {resolve("Promise2")}, 5000)
        
    })
    return p2;
}).then((value)=>{
    console.log("We are Done");
})
