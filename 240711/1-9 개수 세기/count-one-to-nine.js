const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let countArr = Array(10).fill(0);

for (let i = 0; i < n; i++) {
    countArr[arr[i]]++;
}

for (let i = 1; i < 10; i++) {
    console.log(countArr[i]);
}