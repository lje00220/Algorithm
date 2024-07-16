const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const n = Number(input[0]);
const m = Number(input[1]);

let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

let num = 0;
for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (i % 2 === 0) {
            arr2d[j][i] = num;
        } else {
            arr2d[n - j - 1][i] = num;
        }
        num++;
    }
}


for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(" "));
}