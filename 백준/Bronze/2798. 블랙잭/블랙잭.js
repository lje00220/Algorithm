const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ");
const cards = input[1].split(" ").map(Number);

let result = 0;
let sumVal;

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      sumVal = cards[i] + cards[j] + cards[k];
      if (sumVal <= m) {
        result = Math.max(result, sumVal);
      }
    }
  }
}
console.log(result);