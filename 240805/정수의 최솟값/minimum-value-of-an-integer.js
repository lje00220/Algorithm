const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let a = input[0];
let b = input[1];
let c = input[2];

function minimum(a, b, c) {
    return Math.min(a, b, c);
}

console.log(minimum(a, b, c));