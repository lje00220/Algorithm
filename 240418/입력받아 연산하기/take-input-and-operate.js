const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = Number(input[0]);
let b = Number(input[1]);

a += 87;
b %= 10;

console.log(a);
console.log(b);