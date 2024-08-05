const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function isMagicNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let sum_val = 0;
for (let i = a; i <= b; i++) {
    if (isMagicNumber(i)) sum_val += i;
}

console.log(sum_val);