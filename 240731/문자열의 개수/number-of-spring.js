const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;
let str = "";
while (true) {
    if (input[i] === "0") break;
    if (i % 2 === 0) str += (input[i] + "\n");
    i++;
}

console.log(i);
console.log(str);