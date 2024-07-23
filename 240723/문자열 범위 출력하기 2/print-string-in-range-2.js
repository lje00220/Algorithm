const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0];
let n = Number(input[1]);
let len = str.length;

let result = "";
for (let i = len - 1; i >= len - n; i--) {
    if (!str[i]) break;
    result += str[i];
}

console.log(result);