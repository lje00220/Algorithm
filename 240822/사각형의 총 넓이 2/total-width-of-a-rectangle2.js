const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr2d = Array(2001).fill(0).map(() => Array(2001));
let [currentX, currentY] = [1000, 1000];

for (let i = 0; i <= n; i++) {
    let [x1, y1, x2, y2] = input[i].trim().split(" ").map(Number);
    for (let j = currentX + x1; j < currentX + x2; j++) {
        for (let k = currentY + y1; k < currentY + y2; k++) {
            arr2d[j][k] = 1;
        }
    }
}

let area = 0;
for (let i = 0; i < 2001; i++) {
    for (let j = 0; j < 2001; j++) {
        if (arr2d[i][j] === 1) area++;
    }
}

console.log(area);