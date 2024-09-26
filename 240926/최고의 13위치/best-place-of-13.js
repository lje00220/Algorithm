const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
}

let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        cnt = Math.max(cnt, arr[i][j] + arr[i][j + 1] + arr[i][j + 2]);
    }
}

console.log(cnt);