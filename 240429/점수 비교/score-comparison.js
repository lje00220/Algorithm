const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0].split(" ");
let b = input[1].split(" ");

let math_a = Number(a[0]);
let eng_a = Number(a[1]);
let math_b = Number(b[0]);
let eng_b = Number(b[1]);

if((math_a > math_b) && (eng_a > eng_b)) {
    console.log(1);
} else {
    console.log(0);
}