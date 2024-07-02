const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let satisfied = true;

for (let i = a; i <= b; i++) {
    if (c % i === 0) {
        satisfied = false;
        break;
    }
}

if (satisfied) {
    console.log("NO");
} else {
    console.log("YES");
}