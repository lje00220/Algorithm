const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".");

let year = input[0];
let month = input[1];
let day = input[2];

console.log(`${month}-${day}-${year}`);