const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const OFFEST = 1000;
const MAX = 2001;
let n = Number(input[0]);
let arr2d = Array(MAX).fill(0).map(() => Array(MAX));

for (let i = 1; i <= n; i++) {
    let [x1, y1, x2, y2] = input[i].trim().split(" ").map(Number);
    x1 += OFFEST; x2 += OFFEST;
    y1 += OFFEST; y2 += OFFEST;
    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            if (i % 2 !== 0) {
                arr2d[j][k] = 1;
            } else {
                arr2d[j][k] = 2;
            }
        }
    }
}

let area = 0;
for (let i = 0; i < MAX; i++) {
    for (let j = 0; j < MAX; j++) {
        if (arr2d[i][j] === 2) area++;
    }
}

console.log(area);