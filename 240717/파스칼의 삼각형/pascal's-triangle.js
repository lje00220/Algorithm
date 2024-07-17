const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    arr2d[i][0] = 1;
    arr2d[i][i] = 1;
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i - 1][j];
    }
}


let str = "";
for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        if (arr2d[i][j] === 0) continue;
        str += arr2d[i][j] + " ";
    }
    console.log(str);
}