const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");

let front = input[0];
let back = input[1];

console.log(front + back);