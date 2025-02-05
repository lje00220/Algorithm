const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, k] = input[0].split(" ");

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((x, y) => y - x);

console.log(arr[k - 1]);