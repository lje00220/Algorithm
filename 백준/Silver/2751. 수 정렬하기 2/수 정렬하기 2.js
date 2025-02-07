const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = input.slice(1);
let answer = "";

result.sort((x, y) => x - y);

result.forEach((x) => (answer += x + "\n"));

console.log(answer);