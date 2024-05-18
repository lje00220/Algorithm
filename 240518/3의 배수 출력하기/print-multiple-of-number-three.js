const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

let i = 3;
while (i <= n) {
    result += (i + " ");
    i += 3;
}

console.log(result);