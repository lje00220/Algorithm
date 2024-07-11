const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let countArr = Array(10).fill(0);
let i = 0;

while (true) {
    if (input[i] === 0) break;
    countArr[parseInt(input[i] / 10)]++;
    i++;
}

for (let j = 1; j < 10; j++) {
    console.log(`${j} - ${countArr[j]}`);
}