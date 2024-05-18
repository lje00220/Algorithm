const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let b = Number(input[0]);
let a = Number(input[1]);
let result = "";

while (b >= a) {
    result += (b + " ");
    b -= 2;
}

console.log(result);