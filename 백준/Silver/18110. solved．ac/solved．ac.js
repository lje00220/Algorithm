const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input
  .slice(1)
  .map(Number)
  .sort((x, y) => x - y);
const deleteNum = Math.round(n * 0.15);

if (n === 0) {
  console.log(0);
  return;
}

const opinions = [...arr.slice(deleteNum, arr.length - deleteNum)];
const answer = opinions.reduce((acc, cur) => acc + cur, 0);

console.log(Math.round(answer / opinions.length));
