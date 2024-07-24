const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str1 = input[0];
let str2 = input[1];

while (str1.includes(str2)) {
    let index = str1.indexOf(str2);
    str1 = str1.slice(0, index) + str1.slice(index + str2.length);
}

console.log(str1);