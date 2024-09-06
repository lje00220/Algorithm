function checkHandShakeNum(x) {
    return x < k;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, k, p, t] = input[0].trim().split(" ").map(Number);
let handshake = Array(n + 1).fill(0);
let disease = Array(n + 1).fill(0);
let tempArr = Array(250).fill(0);
let arr = [];

disease[p] = 1;

for (let i = 1; i <= t; i++) {
    let [time, x, y] = input[i].trim().split(" ").map(Number);
    tempArr[time] = [time, x, y];
}

for (let elem of tempArr) {
    if (elem !== 0) arr.push(elem);
}

for (let i = 0; i < arr.length; i++) {
    let [time, x, y] = arr[i];

    if (disease[x] === 1 && disease[y] !== 1 && checkHandShakeNum(handshake[x])) {
        disease[y] = 1;
        handshake[x] += 1;
    } else if (disease[x] !== 1 && disease[y] === 1 && checkHandShakeNum(handshake[y])) {
        disease[x] = 1;
        handshake[y] += 1;
    } else if (disease[x] === 1 && disease[y] === 1) {
        if (checkHandShakeNum(handshake[x]) && checkHandShakeNum(handshake[y])) {
            handshake[x] += 1;
            handshake[y] += 1;
        }
    }
}

console.log(disease.slice(1, ).join(""));