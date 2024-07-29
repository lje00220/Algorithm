const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = 0;
for (let elem of input) {
    result += Number(elem);
}

console.log(result);