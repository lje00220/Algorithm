const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let result = [];

for (let elem of arr) {
    if (elem === 0) break;
    if (elem % 2 === 0) {
        result.push(elem / 2);
    } else {
        result.push(elem + 3);
    }
}

console.log(result.join(" "));