const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].trim().split(" ").map(Number);
let sortedArr = input[1].trim().split(" ").map(Number);

sortedArr.sort((a, b) => a - b);

let orderArr = Array(n).fill(0);
let cnt = 1;

for (let i = 0; i < n; i++) {
    orderArr[i] = sortedArr.indexOf(arr[i]) + 1;
    for (let j = 0; j < i; j++) {
        if (orderArr[i] === orderArr[j]) {
            orderArr[i]++;
        }
    }

}

console.log(orderArr.join(" "));