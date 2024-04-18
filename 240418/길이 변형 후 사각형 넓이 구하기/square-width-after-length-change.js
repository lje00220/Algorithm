const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let width = Number(input[0]);
let height = Number(input[1]);

width += 8;
height *= 3;

console.log(width);
console.log(height);
console.log(width*height);