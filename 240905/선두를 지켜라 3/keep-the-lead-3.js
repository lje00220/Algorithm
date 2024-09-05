const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].trim().split(" ").map(Number);
let arrA = [];
let arrB = [];
let [currentA, currentB] = [0, 0];

for (let i = 1; i <= n; i++) {
    let [distance, time] = input[i].trim().split(" ").map(Number);
    for (let j = 0; j < time; j++) {
        currentA += distance;
        arrA.push(currentA);
    }
}

for (let i = n + 1; i < input.length; i++) {
    let [distance, time] = input[i].trim().split(" ").map(Number);
    for (let j = 0; j < time; j++) {
        currentB += distance;
        arrB.push(currentB);
    }
}

let topPerson = [];
for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] === arrB[i]) {
        topPerson.push("A B");
    } else if (arrA[i] > arrB[i]) {
        topPerson.push("A");
    } else {
        topPerson.push("B");
    }
}

let cnt = 0;
for (let i = 1; i <= topPerson.length; i++) {
    if (topPerson[i] !== topPerson[i - 1]) cnt++;
}

console.log(cnt);