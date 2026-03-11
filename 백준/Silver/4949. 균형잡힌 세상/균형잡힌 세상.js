const fs = require("fs");
const sentences = fs.readFileSync(0).toString().trim().split("\n");

const answer = [];

for (let sentence of sentences) {
  if (sentence === ".") break;

  const stack = [];

  for (let char of sentence) {
    if (char === "(" || char === "[") {
      stack.push(char);
      continue;
    }

    if (char === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(char);
        break;
      }
    }

    if (char === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        stack.push(char);
        break;
      }
    }
  }

  answer.push(stack.length === 0 ? "yes" : "no");
}

console.log(answer.join("\n"));
