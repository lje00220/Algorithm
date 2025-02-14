const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const map = new Map();

for (let i = 1; i <= n; i++) {
  const [site, pw] = input[i].split(" ");
  map.set(site, pw);
}

let answer = "";
for (let i = n + 1; i < input.length; i++) {
  answer += map.get(input[i]) + "\n";
}

console.log(answer);