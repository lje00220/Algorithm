const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const rings = input[1].split(" ").map(Number);
const first = rings[0];

function gcd (a,b) {
	if(b === 0) return a;
  	return gcd(b, a % b);
};

for (let i = 1; i < rings.length; i++) {
    const gcdNum = gcd(first, rings[i]);
    console.log(`${first / gcdNum}/${rings[i] / gcdNum}`);
}
