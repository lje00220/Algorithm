const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const n = input[0];
const arr = input.slice(1);

const dp = new Array(n);

dp[0] = arr[0];

if (n > 1) {
  dp[1] = arr[0] + arr[1];
}

if (n > 3) {
  dp[2] = Math.max(dp[0] + arr[2], arr[1] + arr[2]);
} else {
  dp[2] = Math.max(dp[0] + arr[2], arr[1] + arr[2]);
}

for (let i = 3; i < arr.length; i++) {
  dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dp[n - 1]);
