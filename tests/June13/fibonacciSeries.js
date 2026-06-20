"use strict";
function fibonacci(n) {
    if (n > 0) {
        let n1 = 2;
        let n2 = 3;
        console.log(`${n1} ${n2}`);
        let n3 = 0;
        for (let i = 1; i <= n; i++) {
            n3 = n1 + n2;
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
//console.log(`Fibonacci with negative number : ${fibonacci(-2)}`);
let apiResponse = "Success";
apiResponse = 200;
//console.log((apiResponse as string).toUpperCase());
//console.log((<string>apiResponse).toUpperCase());
let apiResponse1 = 200;
apiResponse1 = "Success";
console.log(apiResponse1.toUpperCase());
console.log(apiResponse1.toUpperCase());
