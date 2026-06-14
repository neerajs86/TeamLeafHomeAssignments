
function fibonacci(n : number) : number{
if(n > 0) {
let n1 : number = 2;
let n2 : number = 3;
console.log(`${n1} ${n2}`);
let n3 : number = 0;
for(let i=1; i<=n; i++) {
    n3 = n1+n2;
    n1 = n2;
    n2 = n3;
}
    return n3;
    }
    else {
        throw new Error("Negative number is allowed");
    }
}
console.log(`Fibonacci with 5th number : ${fibonacci(5)}`);
console.log(`Fibonacci with 6th number : ${fibonacci(5)}`);
console.log(`Fibonacci with negative number : ${fibonacci(-2)}`);