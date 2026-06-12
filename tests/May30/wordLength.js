//Example 1
let string1 = "Hello World";
let arr1 = string1.split(" ");
//Total words in the string
console.log("Total words in string1 : "  + arr1.length);
//Last word in the array
const lastWord1 = arr1[arr1.length - 1];
console.log("Last word in string1 : " + lastWord1);
//Length of last word
const lastWordLength1 = lastWord1.length;
console.log("Length of last word in string1 : " + lastWordLength1);


//Example 2
let string2 = " fly me to the moon ";
//Trim the string and split the string into array
let arr2 = string2.trim().split(" ");
//Total words in the string
console.log("Total words in string2 : "  + arr2.length);
//Last word in the array
const lastWord2 = arr2[arr2.length - 1];
console.log("Last word in string2 : " + lastWord2);
//Length of last word
const lastWordLength2 = lastWord2.length;
console.log("Length of last word in string2 : " + lastWordLength2);