function isAnagram(s1, s2) {
    let sort1 = s1.trim().toLowerCase().split("").sort().join("");
    let sort2 = s2.trim().toLowerCase().split("").sort().join("");
    console.log(sort1);
    console.log(sort2);
    let len1 = s1.length;
    console.log(len1);
    let len2 = s2.length;
    console.log(len2);

    if (len1 !== len2) {
        return false;
    }
    else {
        return (sort1 === sort2);
    }
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));




