const fs = require("fs");
const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const binomial = (a, b) => {
  if (b === 0 || a === b) {
    return 1;
  }
  return binomial(a - 1, b - 1) + binomial(a - 1, b);
};

console.log(binomial(N, K));
