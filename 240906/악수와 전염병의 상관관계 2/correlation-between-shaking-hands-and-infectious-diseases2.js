function checkHandShakeNum(x) {
    return x < k;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, k, p, t] = input[0].trim().split(" ").map(Number);
let handshake = Array(n + 1).fill(0);
let disease = Array(n + 1).fill(0);
let arr = [];

disease[p] = 1;

for (let i = 1; i <= t; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
}

arr.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < arr.length; i++) {
    let [time, x, y] = arr[i];

    if (disease[x] === 1 && disease[y] !== 1 && checkHandShakeNum(handshake[x])) {
        disease[y] = 1;
        handshake[x] += 1;
    } else if (disease[x] !== 1 && disease[y] === 1 && checkHandShakeNum(handshake[y])) {
        disease[x] = 1;
        handshake[y] += 1;
    } else if (disease[x] === 1 && disease[y] === 1) {
        handshake[x] += 1;
        handshake[y] += 1;
    }
}

console.log(disease.slice(1, ).join(""));