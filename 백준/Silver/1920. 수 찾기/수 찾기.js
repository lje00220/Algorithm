const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arrA = input[1].split(" ").map(Number);
const arrM = input[3].split(" ").map(Number);
let answer = "";
const map = new Map();

for (let elem of arrA) {
  map.set(elem, 1);
}

for (let elem of arrM) {
  answer += (map.get(elem) || 0) + "\n";
}

console.log(answer);
