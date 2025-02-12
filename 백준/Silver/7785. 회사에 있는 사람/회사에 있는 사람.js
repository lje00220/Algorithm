const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const arr = input.slice(1);

const map = new Map();

for (person of arr) {
  const [name, log] = person.split(" ");
  if (log === "enter") map.set(name, 1);
  if (log === "leave") map.delete(name);
}

const answer = [];

for (let key of map.keys()) {
  answer.push(key);
}

answer.sort().reverse();

console.log(answer.join("\n"));