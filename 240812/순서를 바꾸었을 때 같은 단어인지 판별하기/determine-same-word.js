const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str1 = input[0].split("");
let str2 = input[1].split("");

str1.sort();
str2.sort();

function findSameWord(str1, str2) {
    if (str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) return false;
    }
    return true;
}

if (findSameWord(str1, str2)) {
    console.log("Yes");
} else {
    console.log("No");
}