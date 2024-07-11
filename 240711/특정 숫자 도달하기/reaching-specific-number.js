const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
arr = arr.map(Number);
let sumVal = 0;
let cnt = 0;

for (i of arr) {
    if (i >= 260) break;
    sumVal += i;
    cnt++;
}

console.log(`${sumVal} ${(sumVal/cnt).toFixed(1)}`);