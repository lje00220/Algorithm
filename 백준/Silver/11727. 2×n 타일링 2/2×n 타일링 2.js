const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const arr = new Array(n);
arr[0] = 1;
arr[1] = 3;

for (let i = 2; i < n; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
}

console.log(arr[n - 1] % 10007);
