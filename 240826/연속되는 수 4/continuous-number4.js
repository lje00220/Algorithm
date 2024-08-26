const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input.slice(1, n + 1).map(Number);

let [cnt, maxCnt] = [1, 1];

for (let i = 1; i <= n; i++) {
    if (arr[i] > arr[i - 1]) {
        cnt++;
    } else {
        cnt = 1;
    }

    maxCnt = Math.max(cnt, maxCnt);
}

console.log(maxCnt);