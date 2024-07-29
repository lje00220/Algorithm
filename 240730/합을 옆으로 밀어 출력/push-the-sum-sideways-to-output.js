const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let n = input[0];

let result = 0;
for (let i = 1; i <= n; i++) {
    result += input[i];
}

result = String(result);

result = result.slice(1) + result.slice(0, 1);

console.log(result);