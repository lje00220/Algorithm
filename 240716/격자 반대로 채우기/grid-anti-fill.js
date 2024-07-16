const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

let num = 1;
for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
        if (i % 2 !== 0) {
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