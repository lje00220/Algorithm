const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let satisfied = true;

for (i of input) {
    if (i % 3 !== 0) {
        satisfied = false;
    }
}

console.log(Number(satisfied));