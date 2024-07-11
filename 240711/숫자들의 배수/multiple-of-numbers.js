const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let arr = [];
let cnt = 0;
let i = n;

while (true) {
    arr.push(i);
    if (i % 5 === 0) cnt++;
    if (cnt >= 2) break;
    i += n;
}

console.log(arr.join(" "));