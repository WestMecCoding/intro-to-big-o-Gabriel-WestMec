
let someStr;
let charCount;

function revStrFor(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr
}
function buildStr(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += i;
    }
    return str;
}

function showTime(n) {
    charCount = n;
    someStr = buildStr(charCount);
    console.time(`for loop reverse string ${charCount}`);
    revStrFor(someStr);
    console.timeEnd(`for loop reverse string ${charCount}`);
}
function showTimeArr(n) {
    charCount = n;
    someStr = buildStr(charCount);
    console.time(`for loop reverse string ${charCount}`);
    revStrFor(someStr);
    console.timeEnd(`for loop reverse string ${charCount}`);
}

// console.log(someStr);
// console.log(revStrFor(someStr))