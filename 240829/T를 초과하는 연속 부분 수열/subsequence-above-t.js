const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, t] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let [cnt, maxCnt] = [1, 1];

for (let i = 0; i < n; i++) {
    if (i >= 1 && arr[i] > t && arr[i - 1] > t) {
        cnt++;
    } else {
        cnt = 1;
    }

    maxCnt = Math.max(cnt, maxCnt);
}

console.log(maxCnt);