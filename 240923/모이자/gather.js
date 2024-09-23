const INT_MAX = Number.MAX_SAFE_INTEGER;
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let person = input[1].trim().split(" ").map(Number);
let min_val = INT_MAX;

for (let i = 0; i < n; i++) {
    let house = i;
    let dist = 0;

    for (let j = 0; j < n; j++) {
        dist += person[j] * (Math.abs(house - j));
    }

    min_val = Math.min(min_val, dist);
}

console.log(min_val);