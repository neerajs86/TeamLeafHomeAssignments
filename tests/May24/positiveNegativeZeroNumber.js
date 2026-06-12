function checkNumber(num) {
    if(num > 0) {
        return "positive number";
    }
    else if(num < 0) {
        return "negative number";
    }
    else {
        return "zero";
    }
}
const myNum = 0;
const result = checkNumber(myNum);
console.log(`The number : ${myNum} is a ${result}.`);