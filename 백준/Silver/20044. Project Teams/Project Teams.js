const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const students = input[1].split(" ").map(Number).sort((a, b) => a - b);

const group = [];

for (let i = 0; i < n; i++) {
    const num = students[i] + students[students.length - i - 1];
    group.push(num);
}

console.log(Math.min(...group));


