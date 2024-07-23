const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let c = input[n + 1];

let cnt = 0;
let sum_val = 0;
for (let i = 1; i <= n; i++) {
    if (input[i][0] === c) {
        sum_val += input[i].length;
        cnt++;
    }
}

console.log(cnt, (sum_val / cnt).toFixed(2));