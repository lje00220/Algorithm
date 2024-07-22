const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0];
let n = input[1];

let cnt = 0;
for (elem of str) {
    if (elem === n) cnt++;
}

console.log(cnt);