const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();

let word = "";
let answer = "";
const stack = [];

for (let char of str) {
  if (char === " " && stack.length === 0) {
    answer += word.split("").reverse().join("") + " ";
    word = "";
    continue;
  }

  if (char === "<") {
    if (word) {
      answer += word.split("").reverse().join("");
      word = "";
    }
    stack.push(char);
    answer += char;
    continue;
  }

  if (char === ">") {
    stack.pop();
    answer += char;
    continue;
  }

  if (stack.length !== 0) {
    answer += char;
  } else {
    word += char;
  }
}

if (word) {
  answer += word.split("").reverse().join("");
}

console.log(answer);
