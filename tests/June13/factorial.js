"use strict";
//Function to calculate the factorial of non-negative number
function factorial(n) {
    //Non-negative number
    if (n > 0) {
        let fact = 1;
        for (let i = n; i >= 2; i--) {
            fact = fact * i;
        }
        return fact;
    }
    //Negative number
    else {
        throw new Error("Negative number is allowed");
    }
}
//Check the factorial for non-negative number
console.log(factorial(5));
console.log(factorial(6));
//Check the factorial for negative number
console.log(factorial(-1));
