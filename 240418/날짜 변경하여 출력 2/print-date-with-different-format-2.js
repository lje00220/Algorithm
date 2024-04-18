const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");

let month = Number(input[0]);
let day = Number(input[1]);
let year = Number(input[2]);

console.log(`${year}.${month}.${day}`);