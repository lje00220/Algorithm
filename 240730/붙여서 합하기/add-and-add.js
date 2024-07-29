const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = input[0];
let b = input[1];

let str1 = a + b;
let str2 = b + a;

console.log(Number(str1) + Number(str2));