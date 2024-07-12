const INT_MAX = Number.MAX_SAFE_INTEGER;
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let minVal = INT_MAX;
let cnt = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] < minVal) {
        minVal = arr[i];
    }
}

for (let elem of arr) {
    if (elem === minVal) cnt++;
}

console.log(minVal, cnt);