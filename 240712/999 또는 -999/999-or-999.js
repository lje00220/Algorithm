const INT_MIN = Number.MIN_SAFE_INTEGER;
const INT_MAX = Number.MAX_SAFE_INTEGER;
const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let minVal = INT_MAX;
let maxVal = INT_MIN;

for (let i = 0; i < 100; i++) {
    if (arr[i] === 999 || arr[i] === -999) break;

    if (arr[i] > maxVal) {
        maxVal = arr[i];
    }

    if (arr[i] < minVal) {
        minVal = arr[i];
    }
}

console.log(maxVal, minVal);