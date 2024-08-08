const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function addNum(n) {
    if (n % 2 !== 0) {
        if (n === 1) return 1;
    } else {
        if (n === 2) return 2;
    }
    
    return addNum(n - 2) + n;
}

console.log(addNum(n));