const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + m).map(Number);

const result = [];

for (let i = 0; i < queries.length; i++) {
    const idx = numbers.indexOf(queries[i]);
    if (idx < 0) {
        result.push(-1);
    } else {
        result.push(idx + 1);
    }
}

console.log(result.join("\n"))