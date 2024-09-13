const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = Array(n).fill(0).map(() => Array(m).fill(0));
arr[0][0] = 1;
let dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];
let dirNum = 0;
let [x, y] = [0, 0];

for (let i = 2; i <= n * m; i++) {
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    while (true) {
        if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
            dirNum = (dirNum + 1) % 4;
            nx = x + dx[dirNum], ny = y + dy[dirNum];
        } else {
            break;
        }
    }

    x += dx[dirNum], y += dy[dirNum];
    arr[x][y] = i;
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
}

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}