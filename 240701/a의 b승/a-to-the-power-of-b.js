const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let prod = 1;

for (let i = 0; i < b; i++) {
    prod *= a;
}

console.log(prod);