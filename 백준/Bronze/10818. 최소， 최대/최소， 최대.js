const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");
const arr = input.split(" ").map(Number);

console.log(Math.min(...arr), Math.max(...arr));
