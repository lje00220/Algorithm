const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    arr[i] = input[1].split(" ").map(Number)[i - 1];
}

function findMax(n) {
    if (n === 1) {
        return arr[1];
    }

    return Math.max(findMax(n - 1), arr[n]);
}

console.log(findMax(n));