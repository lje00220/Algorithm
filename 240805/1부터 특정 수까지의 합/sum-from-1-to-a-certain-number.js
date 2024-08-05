const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function sumVal(n) {
    let sum_val = 0;
    for (let i = 1; i <= n; i++) {
        sum_val += i;
    }

    return parseInt(sum_val / 10);
}

console.log(sumVal(n));