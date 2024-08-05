const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let n = input[0];
let m = input[1];

function gcd(n, m) {
    let min = n > m ? m : n;
    for (let i = min; i > 0; i--) {
        if (n % i === 0 && m % i === 0) {
            process.stdout.write(`${i}`);
            break;
        }
    }
}

gcd(n, m);