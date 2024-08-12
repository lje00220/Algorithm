const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].trim().split(" ").map(Number);
let result = [];

function findMiddleValue(val) {
    val.sort((prev, cur) => prev - cur);
    result.push(val[parseInt(val.length / 2)]);
}

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        findMiddleValue(arr.slice(0, i + 1))
    }
}

console.log(result.join(" "));