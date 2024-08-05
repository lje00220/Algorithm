const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let a = input[0];
let b = input[1];
let cnt = 0;

function check369(n) {
    let arr = String(n).split("").map(Number);
    return arr.includes(3) || arr.includes(6) || arr.includes(9)
}

function isMagicNumber(n) {
    return n % 3 === 0 || check369(n);
}

for (let i = a; i <= b; i++) {
    if (isMagicNumber(i)) {
        cnt++;
    }
}

console.log(cnt);