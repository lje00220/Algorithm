const INT_MIN = Number.MIN_SAFE_INTEGER;
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("").map(Number);

let maxVal = INT_MIN;

for (let i = 0; i < input.length; i++) {
    let arr = [...input];
    arr[i] = (arr[i] === 0) ? 1 : 0;
    arr = arr.join("");
    
    let number = parseInt(arr, 2);
    maxVal = Math.max(maxVal, number);
}

console.log(maxVal);