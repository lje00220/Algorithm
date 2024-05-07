const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0].split(" ");
let b = input[1].split(" ");
let c = input[2].split(" ");

let coldA = a[0]; let tempA = Number(a[1]);
let coldB = b[0]; let tempB = Number(b[1]);
let coldC = c[0]; let tempC = Number(c[1]);

let result = 0;

if (coldA == "Y" && tempA >= 37) {
    result += 1;
} 

if (coldB == "Y" && tempB >= 37) {
    result += 1;
} 

if (coldC == "Y" && tempC >= 37) {
    result += 1;
} 

if (result >= 2) {
    console.log("E");
} else {
    console.log("N");
}