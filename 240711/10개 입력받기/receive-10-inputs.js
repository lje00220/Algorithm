const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
arr = arr.map(Number);
let sumVal = 0;
let cnt = 0;

for (let elem of arr) {
    if (elem === 0) break;
    sumVal += elem;
    cnt++;
}

console.log(`${sumVal} ${(sumVal / cnt).toFixed(1)}`);