const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [a, b] = input[0].trim().split(" ").map(Number);
let digits = input[1].trim().split("").map(Number);

let num = 0;
for (let i = 0; i < digits.length; i++) {
    num = num * a + digits[i];
}

let result = [];
while (true) {
    if (num < b) {
        result.push(num);
        break;
    }

    result.push(num % b);
    num = Math.floor(num / b);
}

for (let i = result.length - 1; i >= 0; i--) {
    process.stdout.write(result[i] + "");
}