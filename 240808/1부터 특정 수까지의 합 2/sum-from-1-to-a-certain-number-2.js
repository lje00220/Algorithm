const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function addNum(n) {
    if (n === 1) return 1;
    return addNum(n - 1) + n;
}

console.log(addNum(n));