const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const gcd = (a, b) => {
  let num = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      num = i;
    }
  }
  return num;
};

const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(gcd(n, m));
console.log(lcm(n, m));
