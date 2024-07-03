const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 0; i < n - 1; i++) {
    str = "";
    for (let k = 0; k < i; k++) {
        str += "  ";
    }
    for (let j = 2 * i; j < 2 * n - 1; j++) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 0; i < n; i++) {
    str = "";
    for (let k = 1; k < n - i; k++) {
        str += "  ";
    }
    for(let j = 2 * (n - i - 1); j < 2 * n - 1; j++) {
        str += "* ";
    }
    console.log(str);
}

// 3, 2, 1, 0