const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = Array(n).fill(0).map(() => Array(m).fill(0));
const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let dirNum = 0;
let [x, y] = [0, 0];

arr[0][0] = 1;

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

for (let i = 2; i <= n * m; i++) {
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4;
    } 

    x = x + dx[dirNum], y = y + dy[dirNum];

    arr[x][y] = i;
    
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
}