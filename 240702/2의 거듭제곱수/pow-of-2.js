const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

while (n !== 1) {
    n /= 2;
    cnt++;
}

console.log(cnt);