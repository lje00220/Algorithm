const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

function sumOfPart(a1, a2) {
    let sum_val = 0;
    for (let i = a1; i <= a2; i++) {
        sum_val += arr[i];
    }
    console.log(sum_val);
}

for (let i = 2; i < input.length; i++) {
    let [a1, a2] = input[i].split(" ").map(Number);
    sumOfPart(a1 - 1, a2 - 1);
}