const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
arr = arr.map(Number);
let sumVal = 0;
let cnt = 0;

for (let elem of arr) {
    if (elem === 0) break;
    if (elem % 2 === 0) {
        sumVal += elem;
        cnt++;
    }
}

console.log(cnt, sumVal);