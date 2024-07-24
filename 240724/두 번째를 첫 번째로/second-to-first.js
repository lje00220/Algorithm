const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");

let c1 = input[0];
let c2 = input[1];

for (let i = 0; i < input.length; i++) {
    if (input[i] === c2) input[i] = c1;
}

console.log(input.join(""));