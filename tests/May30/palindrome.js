myStr = "Racecar";

// function to reverse a string
function reverseString(myStr) {
   let charArray = myStr.toLowerCase().split("");
   let revString = "";
   for(let i=(charArray.length)-1; i>=0; i--) {
    revString = revString + charArray[i];
   }
   return revString;
}

   //printing the reverse of the string
    console.log(`Reverse of the string ${myStr} : ${reverseString(myStr)}`);

//function to check if the string is palindrome or not
function isPalindrome(myStr) {
if(myStr.toLowerCase()===reverseString(myStr)) {
    return true;
}
else {
    return false;
}
}
if(isPalindrome(myStr)) {
    console.log(`${myStr} is a palindrome`);
} else {
    console.log(`${myStr} is not a palindrome`);
}