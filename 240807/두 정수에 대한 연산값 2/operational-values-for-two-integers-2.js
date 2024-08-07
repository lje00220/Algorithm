const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function calculate(a, b) {
    if (a > b) {
        a *= 2;
        b += 10;
    } else {
        a += 10;
        b *= 2;
    }
    return [a, b];
}

[a, b] = calculate(a, b);
console.log(a, b);