const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    arr[i] = input[1].split(" ").map(Number)[i - 1];
}

function gcd(a, b) {
    let max = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            max = i;
        }
    }
    return max;
}

function lcm(val, n) {
    // 종료 조건
    if (n === 1) {
        return val;
    }
    // 최소공배수
    let lcmVal = val * arr[n - 1] / gcd(val, arr[n - 1]);
    
    return lcm(lcmVal, n - 1);
}

console.log(lcm(arr[n], n));