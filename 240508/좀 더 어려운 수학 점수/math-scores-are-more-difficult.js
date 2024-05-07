const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let scoreA = input[0].split(" ");
let scoreB = input[1].split(" ");

let mathA = Number(scoreA[0]);
let engA = Number(scoreA[1]);
let mathB = Number(scoreB[0]);
let engB = Number(scoreB[1]);

if (mathA > mathB) {
    console.log("A");
} else if (mathB > mathA) {
    console.log("B");
} else if (engA > engB) {
    console.log("A");
} else {
    console.log("B");
}