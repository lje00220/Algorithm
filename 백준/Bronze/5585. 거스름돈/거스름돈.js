const fs = require("fs");
let money = 1000 - Number(fs.readFileSync(0).toString().trim());
const arr = [500, 100, 50, 10, 5, 1];

let cnt = 0;
for (let elem of arr) {
  cnt += Math.floor(money / elem);
  money -= elem * Math.floor(money / elem);
  if (money === 0) break;
}

console.log(cnt);