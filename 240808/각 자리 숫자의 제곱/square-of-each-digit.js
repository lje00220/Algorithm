const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function squareNum(n) {
    if (n < 10) return n * n;
    return squareNum(parseInt(n / 10)) + (n % 10) * (n % 10);
}

console.log(squareNum(n));