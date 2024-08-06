const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let cnt = 0;

function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function even(n) {
    let sum_val = 0
    if (n === 100) return false;
    sum_val = parseInt(n / 10) + n % 10;
    
    return sum_val % 2 === 0;
}


for (let i = a; i <= b; i++) {
    if (isPrimeNumber(i) && even(i)) cnt++;
}

console.log(cnt);