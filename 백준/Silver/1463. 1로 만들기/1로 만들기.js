const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
const arr = new Array(n + 1);
arr[1] = 0;
arr[2] = 1;

for (let i = 2; i <= n; i++) {
  arr[i] = arr[i - 1] + 1;

  if (i % 2 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 2] + 1);
  }

  if (i % 3 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }
}
console.log(arr[n]);
