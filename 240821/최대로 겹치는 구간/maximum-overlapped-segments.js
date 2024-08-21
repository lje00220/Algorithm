const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = Array(200).fill(0);

for (let i = 1; i <= n; i++) {
    let [x1, x2] = input[i].trim().split(" ").map(Number);
    for (let i = x1 + 1; i < x2; i++) {
        arr[i] += 1;
    }
}

let max = 0;
for (let elem of arr) {
    if (elem >= max) {
        max = elem;
    }
}

console.log(max);