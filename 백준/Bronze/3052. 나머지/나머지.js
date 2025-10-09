const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");
const answer = new Set();
for (let i = 0; i < arr.length; i++) {
  answer.add(arr[i] % 42);
}

console.log(answer.size);
