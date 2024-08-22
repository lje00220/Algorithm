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
    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            arr2d[j][k] = index;
        }
    }
    index += 1;
}

//x와 y의 최댓값을 구해야 함

let [maxX, maxY] = [0, 0];
let [minX, minY] = [MAX, MAX];
for (let i = 0; i < MAX; i++) {
    for (let j = 0; j < MAX; j++) {
        if (arr2d[i][j] === 1) {
            if (i >= maxX) maxX = i;
            if (j >= maxY) maxY = j;
            if (i <= minX) minX = i - 1;
            if (j <= minY) minY = j - 1;
        }
    }
}
// console.log(maxX, maxY);
// console.log(minX, minY);

if (minX === MAX) minX = 0;
if (minY === MAX) minY = 0;

let area = (maxX - minX) * (maxY - minY);
console.log(area);