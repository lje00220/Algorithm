const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let min_val = 100;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[j] - arr[i] < min_val) {
            min_val = arr[j] - arr[i];
        }
    }  
}

console.log(min_val);