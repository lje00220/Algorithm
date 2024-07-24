const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let index = input.indexOf("e");
input = input.slice(0, index) + input.slice(index + 1);

console.log(input);