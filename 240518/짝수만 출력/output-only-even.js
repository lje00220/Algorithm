const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let result = "";

while (a <= b) {
    result += (a + " ");
    a += 2;
}

console.log(result);