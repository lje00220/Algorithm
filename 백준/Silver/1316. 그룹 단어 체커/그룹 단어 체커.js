// 코드를 작성해주세요
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.slice(1,)
let answer = 0;

for (let elem of arr) {
    const checked = new Map();
    checked.set(elem[0], 1);
    let isGroup = true;
    for (let i = 1; i < elem.length; i++) {
        if (!checked.has(elem[i])) {
            checked.set(elem[i], 1);
        } else {
            if (elem[i - 1] !== elem[i]) {
                isGroup = false;
            }
        }
    }
    
    if (isGroup) answer++;
}

console.log(answer);