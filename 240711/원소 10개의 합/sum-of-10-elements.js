const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let sumVal = 0;
arr = arr.map(Number);

for (let i = 0; i < 10; i++) {
    sumVal += arr[i];
}

console.log(sumVal);