const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const noListen = input.slice(1, n + 1);
const noSee = input.slice(n + 1, input.length);

const list = new Map();
const answer = [];
for (let person of noListen) {
  list.set(person, 0);
}

for (let person of noSee) {
  if (list.has(person)) {
    answer.push(person);
  }
}

console.log(answer.length);
console.log(answer.sort().join("\n"));