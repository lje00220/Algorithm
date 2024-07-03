const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = i; j < n - 1; j++) {
        str += " ";
    }
    for (let k = 2 * (n - i - 1); k < 2 * n - 1; k++) {
        str += "*";
    }
    console.log(str);
}

for (let i = 1; i < n; i++) {
    str = "";
    for (let j = (n - i); j < n; j++) {
        str += " ";
    }
    for (let k = 2 * i; k < 2 * n - 1; k++) {
        str += "*";
    }
    console.log(str);
}