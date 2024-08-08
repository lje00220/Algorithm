const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function printNum(n) {
    if (n === 0) {
        return;
    }

    printNum(n - 1);
    process.stdout.write(n + " ");
}

function printNumReverse(n) {
    if (n === 0) {
        return;
    }

    process.stdout.write(n + " ");
    printNumReverse(n - 1);
}

printNum(n);
console.log();
printNumReverse(n);