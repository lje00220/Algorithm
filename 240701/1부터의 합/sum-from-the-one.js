const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let sum_val = 0;

for(let i = 1; i <= 100; i++) {
    sum_val += i;
    if(sum_val >= n) {
        console.log(i);
        break;
    }
}