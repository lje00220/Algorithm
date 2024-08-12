const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].trim().split(" ").map(Number);

arr.sort((prev, cur) => prev - cur);

function findMax() {
    let maxVal = arr[0];
    for (let i = 0; i < 2 * n; i++) {
        if (arr[i] + arr[2 * n - i - 1] >= maxVal) {
            maxVal = arr[i] + arr[2 * n - i - 1];
        }
    }
    return maxVal;
}

console.log(findMax());