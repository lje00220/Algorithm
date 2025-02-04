const fs = require("fs");
const [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 2; i >= 0; i--) {
  console.log(a * b.toString()[i]);
}

console.log(a * b);