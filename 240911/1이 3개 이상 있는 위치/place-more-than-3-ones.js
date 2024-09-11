function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i < input.length; i++) {
    let temp = input[i].split(" ").map(Number);
    arr.push(temp);
}

let dx = [1, 0, -1, 0]; let dy = [0, 1, 0, -1];

let result = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let cnt = 0;
        for (let k = 0; k < 4; k++) {
            let nx = i + dx[k], ny = j + dy[k];
            if (inRange(nx, ny) && arr[nx][ny] === 1) {
                cnt += 1;
            }
        }
        if (cnt >= 3) result++;
    }
}

console.log(result);