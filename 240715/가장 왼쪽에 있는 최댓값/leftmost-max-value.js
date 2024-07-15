const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let ans = [];
let max_val = arr[n-1];
let index = n-1;


for (let i = n-1; i > 0; i--) {
    if (i < index) max_val = arr[i];
    for (let j = i - 1; j >= 0; j--) {
        if (arr[j] >= max_val && j < index) {
            max_val = arr[j];
            index = j;
            // console.log(`max_val = ${max_val}, index = ${index+1}`);
            ans.push(index+1);
        }
    }
}

console.log(ans.join(" "));