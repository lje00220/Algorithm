const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let arr = input[1].split(" ").map(Number);
let result = [];

for (let elem of arr) {
    if (elem % 2 === 0) {
        result.push(elem);
    }
}

console.log(result.join(" "));