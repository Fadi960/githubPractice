const A = new Promise((resolve) => {
    setTimeout(() => {
        resolve("A")
    },4000)
}) // A ends here
console.log(A);
const B = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("B")
    },4000)
})
console.log(B);