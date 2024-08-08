const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function printStr(n) {
    if (n === 0) {
        return;
    }

    printStr(n - 1);
    console.log("HelloWorld");
}

printStr(n);