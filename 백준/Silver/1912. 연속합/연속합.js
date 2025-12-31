const fs = require("fs");
const [n, arr] = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(n);
const numbers = arr.split(" ").map(Number);

const dp = new Array(N);
dp[0] = numbers[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(numbers[i], dp[i - 1] + numbers[i]);
}

console.log(Math.max(...dp));
