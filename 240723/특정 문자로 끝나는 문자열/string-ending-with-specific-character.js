const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = input[10];

let cnt = 0;
for (let i = 0; i < 10; i++) {
    if (input[i][input[i].length - 1] === n) {
        console.log(input[i]);
        cnt++;
    }
}

if (!cnt) console.log("None");