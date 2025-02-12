const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

arr.sort((x, y) => x - y);
let answer = "";

answer += arr.reduce((acc, cur) => acc + cur, 0) / 5 + "\n";
answer += arr[2];
console.log(answer);
