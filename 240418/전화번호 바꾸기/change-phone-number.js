const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");

let front = input[0];
let middle = input[1];
let back = input[2];

console.log(`${front}-${back}-${middle}`);