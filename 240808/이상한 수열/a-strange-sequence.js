const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function f(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return f(parseInt(n / 3)) + f(n - 1);
}

console.log(f(n));