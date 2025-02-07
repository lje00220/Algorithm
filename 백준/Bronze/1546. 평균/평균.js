const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const m = Math.max(...arr);

const answer =
  arr.map((x) => (x / m) * 100).reduce((acc, cur) => (acc += cur), 0) / n;
console.log(answer);
