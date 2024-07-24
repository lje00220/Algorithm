const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0];
let b = input[1];

let cnt = 0;
for (let i = 0 ; i < a.length - 1; i++) {
    if (a[i] === b[0] && a[i + 1] === b[1]) cnt++;
}

console.log(cnt);