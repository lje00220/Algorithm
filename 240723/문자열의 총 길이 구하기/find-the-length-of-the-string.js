const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let len = 0;
for (let elem of input) {
    len += elem.length;
}

console.log(len);