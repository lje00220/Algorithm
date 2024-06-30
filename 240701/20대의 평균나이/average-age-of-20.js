const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let index = 0;
let sum_val = 0;
let cnt = 0;

while (true) {
    let n = Number(input[index]);
    index++;

    if (n > 29 || n < 20) {
        console.log((sum_val / cnt).toFixed(2));
        break;
    }

    sum_val += n;
    cnt++;
}