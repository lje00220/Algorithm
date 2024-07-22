const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str1 = input[0];
let str2 = input[1];

let result = "";

for (elem of str1) {
    if (elem === " ") continue;
    result += elem;
}

for (elem of str2) {
    if (elem === " ") continue;
    result += elem;
}

console.log(result);