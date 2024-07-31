const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str1 = input[0];
let str2 = input[1];

let n = -1;
for (let i = 0; i < str1.length; i++) {
    str1 = str1.slice(-1) + str1.slice(0, str1.length - 1);
    if (str1 === str2) n = i + 1;
}

console.log(n);