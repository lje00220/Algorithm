const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let str = "";
for (elem of input) {
    str += String.fromCharCode(elem) + " ";
}

console.log(str);