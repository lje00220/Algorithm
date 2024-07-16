const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

let num = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr2d[j][i] = num;
        num++;
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(" "));
}