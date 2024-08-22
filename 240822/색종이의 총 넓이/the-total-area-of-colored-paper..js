const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const OFFSET = 100;
let n = Number(input[0]);
let arr2d = Array(201).fill(0).map(() => Array(201));

for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].trim().split(" ").map(Number);
    x += OFFSET; y += OFFSET;
    for (let j = x; j < x + 8; j++) {
        for (let k = y; k < y + 8; k++) {
            arr2d[j][k] = 1;
        }
    } 
}

let area = 0;
for (let i = 0; i < 201; i++) {
    for (let j = 0; j < 201; j++) {
        if (arr2d[i][j] === 1) area++;
    }
}

console.log(area);