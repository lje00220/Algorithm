const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const gcd = (a,b) => a % b === 0 ? b : gcd(b, a % b); 
const lcm = (a,b) => a * b / gcd(a,b);

for (let i = 1; i <= N; i++) {
    const [num1, num2] = input[i].split(" ").map(Number);
    console.log(lcm(num1, num2));
}
