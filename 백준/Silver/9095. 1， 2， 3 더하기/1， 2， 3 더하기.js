const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];
const arr = input.slice(1);
const answerArr = new Array(n + 1);

answerArr[1] = 1;
answerArr[2] = 2;
answerArr[3] = 4;

const maxNum = Math.max(...arr);
for (let i = 4; i <= maxNum; i++) {
  answerArr[i] = answerArr[i - 1] + answerArr[i - 2] + answerArr[i - 3];
}

for (let elem of arr) {
  console.log(answerArr[elem]);
}