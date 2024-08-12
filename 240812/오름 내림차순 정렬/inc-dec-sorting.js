const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((prev, cur) => {
    return prev - cur;
});

console.log(arr.join(" "));
arr.reverse();
console.log(arr.join(" "));