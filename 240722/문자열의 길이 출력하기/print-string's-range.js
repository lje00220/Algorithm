const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let first = input[0];
let second = input[1];

console.log(first.length + second.length);