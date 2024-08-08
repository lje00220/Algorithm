const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function findMax(n) {
    if (n === 0) {
        return arr[0];
    }

    return Math.max(findMax(n - 2), arr[n - 1]);
}

console.log(findMax(n));