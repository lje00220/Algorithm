const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let len = input.length;

input = input.slice(0, 1) + input.slice(2, len - 2) + input.slice(len - 1);

console.log(input);