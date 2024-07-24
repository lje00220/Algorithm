const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let len = input.length;

input = input.slice(0, 2) + input.slice(3, len - 2) + input.slice(len - 1);

console.log(input);