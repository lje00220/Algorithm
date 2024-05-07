const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0].split(" ");
let b = input[1].split(" ");

let ageA = Number(a[0]);
let sexA = a[1];
let ageB = Number(b[0]);
let sexB = b[1];

if ((ageA >= 19 && sexA == "M") || (ageB >= 19 && sexB == "M")) {
    console.log(1);
} else {
    console.log(0);
}