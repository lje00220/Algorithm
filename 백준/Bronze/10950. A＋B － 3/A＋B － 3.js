const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += a + b + "\n";
}

console.log(answer);
