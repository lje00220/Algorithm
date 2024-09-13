const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].trim().split(" ").map(Number);

let arr = Array(n).fill(0).map(() => Array(n).fill(0));

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

for (let i = 1; i < input.length; i++) {
    let [r, c] = input[i].trim().split(" ").map(Number);
    r -= 1; c -= 1;
    arr[r][c] = 1;

    let cnt = 0;
    for (let j = 0; j < 4; j++) {
        let nx = r + dx[j], ny = c + dy[j];
        if (inRange(nx, ny) && arr[nx][ny] === 1) {
            cnt++;
        }
    }
    if (cnt === 3) {
        console.log(1);
    } else {
        console.log(0);
    }
}