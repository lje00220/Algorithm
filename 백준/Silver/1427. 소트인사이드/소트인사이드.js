const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

input.sort((x, y) => y - x);

console.log(input.join(""));