const fs = require("fs");
let digits = fs.readFileSync(0).toString().trim().split("").map(Number);

let num = 0;
for (let i = 0; i < digits.length; i++) {
    num = num * 2 + digits[i];
}

num *= 17

let result = [];
while (true) {
    if (num < 2) {
        result.push(num % 2);
        break;
    }

    result.push(num % 2);
    num = Math.floor(num / 2);
}

for (let i = result.length - 1; i >= 0; i--) {
    process.stdout.write(result[i] + "");
}