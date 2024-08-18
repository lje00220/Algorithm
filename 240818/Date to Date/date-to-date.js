const fs = require("fs");
let [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const NUM_OF_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let elapsedTime = 1;

while (true) {
    if (m1 === m2 && d1 === d2) {
        break;
    }

    elapsedTime++;
    d1++;

    if (d1 > NUM_OF_DAYS[m1]) {
        m1++;
        d1 = 1;
    }
}

console.log(elapsedTime);