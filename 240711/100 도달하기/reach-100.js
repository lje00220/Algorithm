const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = [];
result[0] = 1; result[1] = n;
let i = 2;

while (true) {
    result[i] = result[i - 1] + result[i - 2];
    if (result[i] >= 100) break;
    i++;
}

console.log(result.join(" "));