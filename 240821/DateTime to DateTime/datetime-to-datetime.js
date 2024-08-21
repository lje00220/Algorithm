const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [d1, h1, m1] = [11, 11, 11];
let elapsedTime = 0;

while (true) {
    if (d1 === a && h1 === b && m1 === c) {
        break;
    }

    if (a < 11 || a === 11 && b < 11 || a === 11 && b === 11 && m < 11) {
        elapsedTime = -1;
        break;
    }

    elapsedTime++;
    m1++;

    if (m1 >= 60) {
        m1 = 0;
        h1++;
    }

    if (h1 >= 24) {
        h1 = 0;
        d1++;
    }
}

console.log(elapsedTime);