const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

let arr2d = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
    let r = Number(input[i].split(" ")[0]);
    let c = Number(input[i].split(" ")[1]);

    arr2d[r][c] = r * c;
}

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
        str += arr2d[i][j] + " ";
    }
    console.log(str);
}