const fs = require("fs");
const [start, end] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let primes = new Array(end + 1).fill(true);
primes[0] = primes[1] = false;

for (let i = 2; i * i <= end; i++) {
  if (primes[i]) {
    for (let j = i * i; j <= end; j += i) {
      primes[j] = false;
    }
  }
}

for (let i = start; i <= end; i++) {
  if (primes[i]) console.log(i);
}