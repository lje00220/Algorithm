const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const arr = input.slice(1,).sort((a, b) => b - a);

console.log(arr.join("\n"));
