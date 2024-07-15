const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = [];
let sum_val;

for (let i = 0; i < 4; i++) {
    sum_val = 0;
    arr = input[i].split(" ").map(Number);
    arr.forEach((x) => {
        sum_val += x;
    })
    console.log(sum_val);
}