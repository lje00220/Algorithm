const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let first = Number(input[0]);
let second = Number(input[1]);
let third = Number(input[2]);

let resA, resB

if (first <= second && first <= third) {
    resA = 1;
} else {
    resA = 0;
}

if (first == second == third) {
    resB = 1;
} else {
    resB = 0;
}

console.log(resA, resB);