const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr2d = [];
let sum_val = 0;

for (let i = 0; i < 4; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (i >= j) {
            sum_val += arr2d[i][j];
        }
    }
}

console.log(sum_val);