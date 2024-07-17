const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 1; i <= m; i++) {
    let r = Number(input[i].split(" ")[0]);
    let c = Number(input[i].split(" ")[1]);
    arr2d[r - 1][c - 1] = 1;
}

for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(" "));
}