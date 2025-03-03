const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(" ").map(Number).sort((a, b) => a - b);
const B = input[2].split(" ").map(Number).sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < +input[0]; i++) {
    answer += A[i] * B[i];
}

console.log(answer);