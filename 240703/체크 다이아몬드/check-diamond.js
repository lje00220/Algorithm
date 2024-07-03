const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = i; j < n - 1; j++) {
        str += " ";
    }
    for (let k = n; k >= n - i; k--) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 1; i < n; i++) {
    str = "";
    for (let j = (n - i); j < n; j++) {
        str += " ";
    }
    for (let k = (n - i); k > 0; k--) {
        str += "* ";
    }
    console.log(str);
}