const fs = require("fs");
let [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const DAY_OF_MONTHS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let diffs = 0;
if (m1 === m2) {
    diffs = d2 - d1;
    if (diffs >= 0) {
        console.log(DAYS[diffs % 7]);
    } else {
        console.log(DAYS[(7 - Math.abs(diffs)) % 7]);
    }
} else if (m2 > m1) {
    for (let i = m1; i < m2; i++) {
        diffs += DAY_OF_MONTHS[i];
    }
    diffs = diffs + (d2 - d1);
    console.log(DAYS[diffs % 7]);
} else {
    for (let i = m2; i < m1; i++) {
        diffs += DAY_OF_MONTHS[i];
    }
    diffs = diffs + d2 - d1;
    console.log(DAYS[(diffs - 3) % 7]);
}