const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const dp = new Array(n).fill(0).map(() => new Array(3));
dp[0][0] = arr[0][0];
dp[0][1] = arr[0][1];
dp[0][2] = arr[0][2];

for (let i = 1; i < n; i++) {
  dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[n - 1]));
