const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = Array(n).fill(0).map(() => Array(m).fill(0));
let char = "A"
arr[0][0] = char;

let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let [x, y] = [0, 0];
let dirNum = 0;

for (let i = 1; i < n * m; i++) {
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4;
    }

    x += dx[dirNum], y += dy[dirNum];
    char = String.fromCharCode(char.charCodeAt(0) + 1);
    if (char > "Z") {
        char = "A";
    }
    arr[x][y] = char;
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
}

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}