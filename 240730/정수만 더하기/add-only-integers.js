const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let sum_val = 0;
for (let elem of input) {
    if (elem >= 0 && elem <= 9) {
        sum_val += Number(elem);
    }
}

console.log(sum_val);