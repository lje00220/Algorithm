const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].trim().split(" ").map(Number);
let arrA = [];
let arrB = [];
let [currentA, currentB] = [0, 0];

for (let i = 1; i <= n; i++) {
    let [v, t] = input[i].trim().split(" ").map(Number);
    for (let j = 0; j < t; j++) {
        currentA += v;
        arrA.push(currentA);
    }
}

for (let i = n + 1; i < input.length; i++) {
    let [v, t] = input[i].trim().split(" ").map(Number);
    for (let j = 0; j < t; j++) {
        currentB += v;
        arrB.push(currentB);
    }
}

let cnt = 0;
for (let i = 1; i < arrA.length; i++) {
    if (arrA[i - 1] >= arrB[i - 1] && arrA[i] < arrB[i]) {
        cnt++;
    } else if (arrA[i - 1] <= arrB[i - 1] && arrA[i] > arrB[i]) {
        cnt++;
    }
}

console.log(cnt);