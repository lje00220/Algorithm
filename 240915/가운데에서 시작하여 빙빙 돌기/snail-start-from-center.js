const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr = Array(n).fill(0).map(() => Array(n).fill(0));
let x = n - 1, y = n - 1;
arr[x][y] = n * n;

let dx = [0, -1, 0, 1], dy = [-1, 0, 1, 0];
let dirNum = 0;

for (let i = n * n - 1; i > 0; i--) {
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4;
    }

    x += dx[dirNum], y += dy[dirNum];
    arr[x][y] = i;
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
}

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}