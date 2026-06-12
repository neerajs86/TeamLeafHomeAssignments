function isOddOrEven(num) {
    num = 3;
    if(num % 2 ==0) {
        return "even";
    }
    else {
        return "odd";
    }
}
const myNum = 4;
const result = isOddOrEven(myNum);
console.log(`The number : ${myNum} is an ${result} number.`);