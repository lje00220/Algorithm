const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let arr2 = arr[1].split(" ");
arr2 = arr2.map(Number);
let result = [];

for (let elem of arr2) {
    if (elem % 2 === 0) {
        result.push(elem);
    }
}

console.log(result.reverse().join(" "));