const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const OFFSET = 1000;
let arr2d = Array(2001).fill(0).map(() => Array(2001));

let [x1, y1, x2, y2] = input[0].trim().split(" ").map(Number);
for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
        arr2d[OFFSET + i][OFFSET + j] = 1;
    }

}

[x1, y1, x2, y2] = input[1].trim().split(" ").map(Number);
for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
        arr2d[OFFSET + i][OFFSET + j] = 1;
    }

}

[x1, y1, x2, y2] = input[2].trim().split(" ").map(Number);
for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
        arr2d[OFFSET + i][OFFSET + j] = 0;
    }

}

let area = 0;
for (let i = 0; i < 2001; i++) {
    for (let j = 0; j < 2001; j++) {
        if (arr2d[i][j] === 1) {
            area++;
        }
    }
}

console.log(area);