const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [coinCnt, charge] = input[0].split(" ").map(Number);
const coinArr = input.slice(1, ).map(Number).reverse();

let cnt = 0;
for (let coin of coinArr) {
    cnt += Math.floor(charge / coin);
    charge = charge % coin;
    if (charge === 0) break;
}

console.log(cnt);
