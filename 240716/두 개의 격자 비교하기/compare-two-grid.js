const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);

let arr1 = [];
let arr2 = [];
let result = Array(n).fill(0).map(() => Array(m).fill(0));

for (let i = 1; i < n + 1; i++) {
    arr1.push(input[i].split(" ").map(Number));
}

for (let i = n + 1; i < 2 * n + 1; i++) {
    arr2.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
            result[i][j] = 1;
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(result[i].join(" "));
}