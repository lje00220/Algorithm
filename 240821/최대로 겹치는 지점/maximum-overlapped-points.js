const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = Array(100).fill(0);

for (let i = 1; i <= n; i++) {
    let [x1, x2] = input[i].trim().split(" ").map(Number);
    for (let j = x1; j <= x2; j++) {
        arr[j] += 1;
    }
}

let max_val = 0;
for (let elem of arr) {
    if (elem >= max_val) {
        max_val = elem;
    }
}

console.log(max_val);