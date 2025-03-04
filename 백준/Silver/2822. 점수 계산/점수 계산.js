const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const number = [...input].sort((x, y) => y - x) ;
const fiveNum = number.slice(0, 5);
const total = fiveNum.reduce((acc, cur) => acc + cur, 0);
console.log(total);
const idx = fiveNum.map((num) => input.indexOf(num) + 1).sort((x, y) => x - y);
console.log(idx.join(" "));