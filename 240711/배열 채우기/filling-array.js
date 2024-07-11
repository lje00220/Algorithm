const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let result = [];

for (let elem of arr) {
    if (elem == 0) break;
    result.push(elem);
}

console.log(result.reverse().join(" "));