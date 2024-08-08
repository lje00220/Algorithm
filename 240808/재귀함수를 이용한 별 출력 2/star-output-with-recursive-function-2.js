const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function printStar(n) {
    if (n === 0) return;

    for (let i = 0; i < n; i++) process.stdout.write("* ");
    console.log();
    printStar(n - 1);
    for (let i = 0; i < n; i++) process.stdout.write("* ");
    console.log();
}

printStar(n);