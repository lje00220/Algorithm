const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const nCard = input[1].split(" ").map(Number);
const mCard = input[3].split(" ").map(Number);

const map = new Map();
let answer = "";

for (let elem of nCard) {
  if (map.has(elem)) {
    map.set(elem, map.get(elem) + 1);
  } else {
    map.set(elem, 1);
  }
}

for (let elem of mCard) {
  if (map.has(elem)) {
    answer += map.get(elem) + " ";
  } else {
    answer += 0 + " ";
  }
}

console.log(answer);
