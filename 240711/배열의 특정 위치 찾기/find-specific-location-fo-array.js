const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
arr = arr.map(Number);
let sumVal2 = 0;
let sumVal3 = 0;

for (let i = 1; i <= 10; i += 2) {
    sumVal2 += arr[i];
}

for (let i = 2; i <= 10; i += 3) {
    sumVal3 += arr[i];
}

console.log(`${sumVal2} ${(sumVal3 / 3).toFixed(1)}`);