const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const dp = [];
for (let i = 0; i < n; i++) {
  dp.push(new Array(i + 1).fill(0));
}

dp[0][0] = arr[0][0];

for (let i = 1; i < n; i++) {
  if (i === 1) {
    dp[1][0] = arr[1][0] + arr[0][0];
    dp[1][1] = arr[1][1] + arr[0][0];
  } else {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][0] = arr[i][0] + dp[i - 1][0];
      } else if (j === i) {
        dp[i][j] = arr[i][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = arr[i][j] + Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }
}

console.log(Math.max(...dp[n - 1]));
