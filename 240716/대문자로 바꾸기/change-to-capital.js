const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = [];

for (let i = 0; i < 5; i++) {
    arr = input[i].split(" ");
    console.log(arr.join(" ").toUpperCase());
}