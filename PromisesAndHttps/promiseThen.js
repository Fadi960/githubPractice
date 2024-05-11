// promise then and catch
let p1 = new Promise ((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and iam fullfilled");
        resolve(true)
    },4000)
})
console.log(p1);

let p2 = new Promise ((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and iam rejected");
        reject(new Error("Iam an error"))
    },4000)
})
console.log(p1, p2);

p1.then((value)=>{
    console.log(value);
})

p2.catch((error)=>{
    console.log("some error occured in p2");
})