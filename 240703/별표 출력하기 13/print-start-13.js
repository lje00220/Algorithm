const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < 2 * n; i++) {
    str = "";
    if (i % 2 === 0) {
        for (let j = i / 2; j < n; j++) {
            str += "* ";
        }
    } else {
        for (let k = n - (i / 2); k < n; k++) {
            str += "* ";
        }
    }
    console.log(str);
}