const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].trim().split(" ").map(Number);

let maxVal = 0;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 2; j < arr.length; j++) {
        let val = arr[i] + arr[j];
        maxVal = Math.max(maxVal, val);
    }
}

console.log(maxVal);