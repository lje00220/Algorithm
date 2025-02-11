const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const numbers = input.slice(1).map(Number);

const answer = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 0) answer.push(numbers[i]);
  if (numbers[i] === 0) answer.pop();
}

const result = answer.reduce((acc, cur) => acc + cur, 0);
console.log(result);