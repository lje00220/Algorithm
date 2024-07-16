const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);

let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

let num = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        arr2d[i][j] = num;
        num++;
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(" "));
}