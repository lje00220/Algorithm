const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let buy;
let max_val = 0;

for (let i = 0; i < n - 1; i++) {
    buy = arr[i];
    for (let j = i + 1; j < n; j++) {
        if (arr[j] > buy && (arr[j] - buy) > max_val) {
            max_val = arr[j] - buy;
        }
    }
}

console.log(max_val);