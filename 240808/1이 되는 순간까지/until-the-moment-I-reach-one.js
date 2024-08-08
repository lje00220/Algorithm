const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

function div(n) {
    if (n === 1) return cnt;
    cnt++;
    if (n % 2 === 0) {
        return div(n / 2);
    } else {
        return div(parseInt(n / 3));
    }
}


console.log(div(n));