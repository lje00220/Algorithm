const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let tileArr = Array(200001).fill(0);
let current = 100000;

for (let i = 1; i <= n; i++) {
    let [distance, dir] = input[i].trim().split(" ");
    distance = Number(distance);
    if (dir === "R") {
        for (let j = current; j < current + distance; j++) {
            tileArr[j] = 1;
        }
        current += (distance - 1);
    } else {
        for (let j = current; j > current - distance; j--) {
            tileArr[j] = -1;
        }
        current -= (distance - 1);
    }
}

let [black, white] = [0, 0];
for (let elem of tileArr) {
    if (elem === 1) {
        black++;
    } else if (elem === -1) {
        white++;
    }
}

console.log(white, black);