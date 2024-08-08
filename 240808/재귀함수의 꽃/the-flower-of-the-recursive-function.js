const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function printNum(n) {
    if (n === 0) return;

    process.stdout.write(n + " ");
    printNum(n - 1);
    process.stdout.write(n + " ");
}

printNum(n);