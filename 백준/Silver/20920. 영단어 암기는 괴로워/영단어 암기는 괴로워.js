const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1,);
const map = new Map();

for (let elem of arr) {
    if (elem.length >= m) {
        if (!map.has(elem)) {
            map.set(elem, 1);
        } else {
            map.set(elem, map.get(elem) + 1);
        }
    }
}

const sortedArr = [...map].sort((a, b) => b[1] - a[1] || b[0].length - a[0].length || a[0].localeCompare(b[0]));

let answer = "";
sortedArr.forEach((x, idx) => {
    if (idx === sortedArr.length - 1) {answer += x[0];} else {answer += x[0] + "\n"};
})

console.log(answer);
