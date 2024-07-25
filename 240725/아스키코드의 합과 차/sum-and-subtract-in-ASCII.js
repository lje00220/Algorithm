const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = input[0].charCodeAt(0);
let b = input[1].charCodeAt(0);

if (a >= b) {
    console.log(a + b, a - b);
} else {
    console.log(a + b, b - a);
}