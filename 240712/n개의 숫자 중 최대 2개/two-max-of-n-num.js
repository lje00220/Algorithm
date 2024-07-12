const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort(function(a, b) {
    return b - a;
})

console.log(arr[0], arr[1]);