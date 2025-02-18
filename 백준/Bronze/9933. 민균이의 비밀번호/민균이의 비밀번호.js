const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1,);

const pwd = new Map();
for (let elem of arr) {
    pwd.set(elem, 1);
}

let answer;
for (let key of pwd.keys()) {
    const reverseWord = key.split("").reverse().join("");
    if (pwd.has(reverseWord)) {
        answer = key;
        break;
    }
}

console.log(answer.length, answer[Math.floor(answer.length / 2)])
