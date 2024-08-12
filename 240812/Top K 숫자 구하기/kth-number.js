const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

arr.sort((prev, cur) => {
    return prev - cur;
});

console.log(arr[k - 1]);