const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function calculate(a, b) {
    if (a >= b) {
        a += 25;
        b *= 2;
    } else {
        a *= 2;
        b += 25;
    }
    return [a, b];
}

[a, b] = calculate(a, b);
console.log(a, b);