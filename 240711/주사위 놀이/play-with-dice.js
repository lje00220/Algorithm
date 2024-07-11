const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let countArr = Array(7).fill(0);

for (let i = 0; i < 10; i++) {
    countArr[input[i]]++;
}

for (let i = 1; i < 7; i++) {
    console.log(`${i} - ${countArr[i]}`);
}