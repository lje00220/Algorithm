const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const haveCards = input[1].split(" ").map(Number);
const giveCards = input[3].split(" ").map(Number);

const map = new Map();
for (let card of haveCards) {
  map.set(card, 1);
}

let answer = "";

for (let card of giveCards) {
  answer += map.has(card) ? 1 + " " : 0 + " ";
}

console.log(answer);