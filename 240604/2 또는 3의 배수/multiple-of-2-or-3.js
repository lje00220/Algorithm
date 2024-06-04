const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

for (let i = 1; i <= n; i++){
    if (i % 2 == 0 || i % 3 == 0) {
        result += (1 + " ");
    } else {
        result += (0 + " ");
    }
}

console.log(result);