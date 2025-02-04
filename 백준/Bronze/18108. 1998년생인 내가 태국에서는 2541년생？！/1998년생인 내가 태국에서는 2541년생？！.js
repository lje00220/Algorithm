const fs = require("fs");
const input = Number(
  fs.readFileSync("/dev/stdin").toString().trim().split(" ")
);

console.log(input - 543);