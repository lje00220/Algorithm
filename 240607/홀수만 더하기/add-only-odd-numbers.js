const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let sumVal = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 != 0 && input[i] % 3 == 0) {
        sumVal += input[i];
    }
}

console.log(sumVal);