const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(Number);

const arr = input.slice(1).map(Number).reverse();

let cnt = 0;
for (let elem of arr) {
  cnt += Math.floor(k / elem);
  k = k - elem * Math.floor(k / elem);
}

console.log(cnt);