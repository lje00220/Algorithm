const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + m).map(Number);

const result = [];

for (let i = 0; i < queries.length; i++) {
    let [left, right] = [0, n - 1];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (numbers[mid] == queries[i]) {
            result.push(mid + 1);
            break;
        }
        if (numbers[mid] > queries[i]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (result.length !== i + 1) {
        result.push(-1);
    }

}

console.log(result.join("\n"))