const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";
for (let i = 1; i < input.length; i++) {
  const [n, str] = input[i].split(" ");
  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(n);
  }
  answer += "\n";
}

console.log(answer);
