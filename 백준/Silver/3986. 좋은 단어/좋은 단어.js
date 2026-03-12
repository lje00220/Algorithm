const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const words = input.slice(1);

let answer = 0;

for (let word of words) {
  const stack = [];

  for (let char of word) {
    if (stack.length === 0) {
      stack.push(char);
      continue;
    }

    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  if (stack.length === 0) answer++;
}

console.log(answer);
