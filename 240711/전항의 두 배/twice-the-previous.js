const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let result = [];
result[0] = input[0]; result[1] = input[1];

for (let i = 2; i < 10; i++) {
    result[i] = result[i - 1] + 2 * result[i - 2];
}

console.log(result.join(" "));