const MAX_VAL = Number.MIN_SAFE_INTEGER;
const MIN_VAL = Number.MAX_SAFE_INTEGER;
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let max_val = MAX_VAL;
let min_val = MIN_VAL;

for (let i = 0; i < 10; i++) {
    if (input[i] >= max_val && input[i] < 500) {
        max_val = input[i];
    }
}

for (let i = 0; i < 10; i++) {
    if (input[i] <= min_val && input[i] > 500) {
        min_val = input[i];
    }
}

console.log(max_val, min_val);