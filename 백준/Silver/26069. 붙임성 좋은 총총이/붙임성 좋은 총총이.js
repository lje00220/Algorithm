const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1,);
const map = new Map();
map.set("ChongChong", 1);

for (let elem of arr) {
    const [a, b] = elem.split(" ");
    if (map.has(a) || map.has(b)) {
        map.set(a, 1);
        map.set(b, 1);
    }
}

const answer = [];
for (let key of map.keys()) {
    answer.push(key);
}

console.log(answer.length)
