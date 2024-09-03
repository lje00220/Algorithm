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

let first = arrA[0] > arrB[0] ? "A" : arrA[0] === arrB[0] ? "Both" : "B"
let cnt = 0;
for (let i = 1; i < arrA.length; i++) {
    if (first === "A" && arrA[i] < arrB[i]) {
        cnt++;
        first = "B";
    } else if (first === "B" && arrA[i] > arrB[i]) {
        cnt++;
        first = "A";
    } else if (first === "Both") {
        first = arrA[i] > arrB[i] ? "A" : arrA[0] === arrB[0] ? "Both" : "B"
    }
}

console.log(cnt);