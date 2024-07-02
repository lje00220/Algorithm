const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j <= i; j++) {
        str += "*";
    }
    console.log(str);
    console.log();
}

for (let i = n - 1; i > 0; i--) {
    str = "";
    for (let j = i; j > 0; j--) {
        str += "*";
    }
    console.log(str);
    console.log();
}