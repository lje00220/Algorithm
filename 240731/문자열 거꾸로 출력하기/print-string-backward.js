const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;
while (true) {
    if (input[i] === "END") break;
    console.log(input[i].split("").reverse().join(""));
    i++;
}