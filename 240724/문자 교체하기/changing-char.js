const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let str1 = input[0];
let str2 = input[1];

let result = str1.slice(0, 2) + str2.slice(2);

console.log(result);