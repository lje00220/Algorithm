const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let satisfied = true;

for (let i = a; i <= b; i++) {
    if (i % c === 0) {
        satisfied = false;
        break;
    }
}

if (satisfied === true) {
    console.log("YES");
} else {
    console.log("NO");
}