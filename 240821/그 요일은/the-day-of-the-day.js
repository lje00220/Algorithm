const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [m1, d1, m2, d2] = input[0].split(" ").map(Number);
let day = input[1];

function totalDay(m, d) {
    const DAY_OF_MONTHS = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let total = 0;

    for (let i = 1; i < m; i++) {
        total += DAY_OF_MONTHS[i];
    }

    total += d;

    return total;
}   

let diffs = totalDay(m2, d2) - totalDay(m1, d1);
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Wed'];

let index = DAYS.indexOf(day);

if (diffs % 7 <= index) {
    console.log(parseInt(diffs / 7) + 1);
} else {
    console.log(parseInt(diffs / 7));
}