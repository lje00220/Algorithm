let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const stack = [];

let answer = "";

for (let i = 1; i < input.length; i++) {
  if (input[i].includes("push")) {
    const [order, n] = input[i].split(" ");
    stack.push(n);
  }

  if (input[i] === "pop") {
    if (stack.length === 0) {
      answer += "-1" + "\n";
    } else {
      const popNum = stack.pop();
      answer += popNum + "\n";
    }
  }

  if (input[i] === "size") {
    answer += stack.length + "\n";
  }

  if (input[i] === "empty") {
    answer += +(stack.length === 0) + "\n";
  }

  if (input[i] === "top") {
    if (stack.length === 0) {
      answer += "-1" + "\n";
    } else {
      answer += stack[stack.length - 1] + "\n";
    }
  }
}

console.log(answer);