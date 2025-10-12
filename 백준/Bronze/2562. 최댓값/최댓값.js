const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let maxNum = 0;
let idx = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
    idx = i;
  }
}

console.log(maxNum);
console.log(idx + 1);
