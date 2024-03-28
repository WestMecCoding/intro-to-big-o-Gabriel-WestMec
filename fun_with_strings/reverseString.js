// initialize a variable called someStr to some string of your choice
let someStr = "Hello World";
// create a named function that takes an argument `str`
function reverseString(str) {
    str = str.split("").reverse().join("")
    // return `str`
    return str;
}
// outside of the function log the function and pass someStr
console.log(reverseString(someStr))