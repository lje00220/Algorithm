const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

// 2n - 1

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    console.log(str);
}