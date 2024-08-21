const fs = require("fs");
let [num, binary] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let result = [];
while (true) {
    if (num < binary) {
        result.push(num % binary);
        break;
    }

    result.push(num % binary);
    num = Math.floor(num / binary);
}

for (let i = result.length - 1; i >= 0; i--) {
    process.stdout.write(result[i] + "");
}