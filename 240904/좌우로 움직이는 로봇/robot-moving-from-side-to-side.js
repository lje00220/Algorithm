const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const MAX_VALUE = 2000000;

let [n, m] = input[0].trim().split(" ").map(Number);
let robotA = [];
let robotB = [];
let [currentA, currentB] = [0, 0];

for (let i = 1; i <= n; i++) {
    let [time, dir] = input[i].trim().split(" ");
    time = Number(time);

    for (let j = 0; j < time; j++) {
        robotA.push(currentA);
        if (dir === "R") {
            currentA++;
        } else {
            currentA--;
        }
    }
}

for (let i = n + 1; i < input.length; i++) {
    let [time, dir] = input[i].trim().split(" ");
    time = Number(time);

    for (let j = 0; j < time; j++) {
        robotB.push(currentB);
        if (dir === "R") {
            currentB++;
        } else {
            currentB--;
        }
    }
}

let cnt = 0;
for (let i = 1; i <= Math.max(robotA.length, robotB.length); i++) {
    if (robotA[i - 1] !== robotB[i - 1] && robotA[i] === robotB[i]) {
        cnt++;
    }
}

console.log(cnt);