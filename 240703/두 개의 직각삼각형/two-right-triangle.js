const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = n; j > i; j--) {
        str += "*";
    }

    for (let k = 0; k < i; k++) {
        str += "  ";
    }

    for (let j = n; j > i; j--) {
        str += "*";
    }

    console.log(str);
}