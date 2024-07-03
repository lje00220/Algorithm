const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

// 별은 2n-1개씩

for (let i = n; i > 0; i--) {
    str = "";
    for (let j = n; j > i; j--) {
        str += "  ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        str += "* ";
    }
    console.log(str);
}