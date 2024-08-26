const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let cnt = 1;
let maxCnt = 0;

for (let i = 1; i < n; i++) {
    maxCnt = Math.max(maxCnt, cnt);

    if (arr[i] === arr[i - 1]) {
        cnt++;
    } else {
        cnt = 1;
    }
}

console.log(maxCnt);