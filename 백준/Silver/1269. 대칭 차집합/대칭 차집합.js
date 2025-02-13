const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

const mapA = new Map();
const mapB = new Map();

for (let i = 0; i < n; i++) {
  mapA.set(A[i], 1);
}

for (let i = 0; i < m; i++) {
  mapB.set(B[i], 1);
}

let answer = mapA.size + mapB.size;
for (let key of mapB.keys()) {
  if (mapA.has(key)) answer -= 2;
}

console.log(answer);