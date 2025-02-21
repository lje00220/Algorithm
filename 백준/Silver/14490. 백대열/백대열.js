const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(":").map(Number);

const gcd = (a, b) => (a % b === 0) ? b : gcd(b, a % b);

const gcdNum = gcd(n, m);

console.log(`${n / gcdNum}:${m / gcdNum}`);
