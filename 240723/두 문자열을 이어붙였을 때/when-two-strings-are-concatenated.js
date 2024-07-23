const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0];
let b = input[1];

let arr1 = a + b;
let arr2 = b + a;

if (arr1 === arr2) {
    console.log("true");
} else {
    console.log("false");
}