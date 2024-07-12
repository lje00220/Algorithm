const INT_MIN = Number.MIN_SAFE_INTEGER;
const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let maxVal = INT_MIN;

for (let i = 0; i < 10; i++) {
    if (arr[i] > maxVal) {
        maxVal = arr[i];
    }
}

console.log(maxVal);