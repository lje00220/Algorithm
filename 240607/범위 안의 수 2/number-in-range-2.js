const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let sumVal = 0; let aver = 0; let cnt = 0;

for (let i = 0; i < 10; i++) {
    if (input[i] >= 0 && input[i] <= 200) {
        sumVal += Number(input[i]);
        cnt++;
    }
}

aver = (sumVal / cnt).toFixed(1);

console.log(sumVal, aver);