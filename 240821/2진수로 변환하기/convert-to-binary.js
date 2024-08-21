const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let digits = [];

while (true) {
    if (n < 2) {
        digits.push(n);
        break;
    }

    digits.push(n % 2);
    n = Math.floor(n / 2);
}

for (let i = digits.length - 1; i >= 0; i--) {
    process.stdout.write(digits[i] + "");
}