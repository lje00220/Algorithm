const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

arr.sort((x, y) => x - y);

let answer = 0;
let k = arr.length;
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] * (k - i);
}

console.log(answer);