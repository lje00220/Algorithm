const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

let arr = input.slice(1);

console.log(arr.join(""));