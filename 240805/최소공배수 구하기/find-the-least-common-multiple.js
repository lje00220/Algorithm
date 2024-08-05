const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let n = input[0];
let m = input[1];

function lcm(n, m) {
    let min = Math.min(n, m);
    for (let i = min; i <= n * m; i += min) {
        if (i % n === 0 && i % m === 0) {
            process.stdout.write(`${i}`);
            break;
        }
    }
}

lcm(n, m);