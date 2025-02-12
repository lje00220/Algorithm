const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const map = new Map();
for (let i = 1; i <= n; i++) {
  map.set(input[i], 1);
}

let answer = 0;
for (let i = n + 1; i < input.length; i++) {
  if (map.has(input[i])) answer++;
}

console.log(answer);