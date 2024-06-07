const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let sumVal = 0; let aver = 0;

for (let i = 1; i <= n; i++) {
    sumVal += Number(input[i]);
}

aver = (sumVal / n).toFixed(1);

console.log(sumVal, aver);