const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[1].split(" ").map(Number).sort((x, y) => x - y);
const map = new Map();
for (let elem of arr) {
    map.set(elem , 1);
}

const answer = [];
for (let key of map.keys()) {
    answer.push(key);
}

console.log(answer.join(" "));
