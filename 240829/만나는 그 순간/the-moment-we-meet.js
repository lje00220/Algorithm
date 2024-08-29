const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].trim().split(" ").map(Number);
let arrA = [];
let arrB = [];
let [curA, curB] = [0, 0];

function move(dir, distance, arr, current) {
    if (dir === "R") {
        while(distance > 0) {
            current += 1;
            arr.push(current);
            distance--;
        }
    } else {
        while(distance > 0) {
            current -= 1;
            arr.push(current);
            distance--;
        }
    }
    return current;
}

for (let i = 1; i <= n; i++) {
    let [dir, distance] = input[i].trim().split(" ");
    distance = Number(distance);

    curA = move(dir, distance, arrA, curA);
}

for (let i = n + 1; i < input.length; i++) {
    let [dir, distance] = input[i].trim().split(" ");
    distance = Number(distance);

    curB = move(dir, distance, arrB, curB);
}

let sec = -1;
for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] === arrB[i]) {
        sec = i + 1;
        break;
    }
}

console.log(sec);