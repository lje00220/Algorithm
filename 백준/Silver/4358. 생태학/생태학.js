const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const trees = new Map();
const len = input.length;
input.sort();

for (let elem of input) {
    if (!trees.has(elem)) {
        trees.set(elem, 1);
    } else {
        trees.set(elem, trees.get(elem) + 1);
    }
}

let answer = [];

trees.forEach((value, key) => {
  const percentageOfTree = ((value / len) * 100).toFixed(4);
  console.log(`${key} ${percentageOfTree}`);
});
