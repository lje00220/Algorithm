const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const numbers = input[1].split(" ").map(Number);
let cnt = Number(input[0]);

for (let number of numbers) {
  if (number === 1) {
    cnt--;
    continue;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      cnt--;
      break;
    }
  }
}

console.log(cnt);
