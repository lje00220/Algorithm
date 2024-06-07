const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let sumVal = 0; let cnt = 0; let aver = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
        sumVal += i;
        cnt++;
    }
}

aver = (sumVal / cnt).toFixed(1);

console.log(sumVal, aver);