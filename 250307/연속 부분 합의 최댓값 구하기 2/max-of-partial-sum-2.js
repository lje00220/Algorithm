const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number);

let [answer, sumVal] = [a[0], 0];

for (let i = 0; i < n; i++) {
    sumVal += a[i];
    answer = Math.max(answer, sumVal);
    if (sumVal < 0) {
        sumVal = 0;
    }
}

console.log(answer);