const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const OFFSET = 1000;
const MAX = 2001;
let arr2d = Array(MAX).fill(0).map(() => Array(MAX));
let index = 1;

for (let i = 0; i < 2; i++) {
    let [x1, y1, x2, y2] = input[i].trim().split(" ").map(Number);
    x1 += OFFSET; x2 += OFFSET;
    y1 += OFFSET; y2 += OFFSET;
    for (let j = x1; j <= x2; j++) {
        for (let k = y1; k <= y2; k++) {
            arr2d[j][k] = index;
        }
    }
    index += 1;
}

let area = 0;
for (let i = 0; i < MAX; i++) {
    for (let j = 0; j < MAX; j++) {
        if (arr2d[i][j] === 1) {
            area += 1;
            // console.log(i, j);
        }
    }
}

console.log(area);