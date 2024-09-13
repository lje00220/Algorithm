const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("");

let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let [x, y] = [0, 0];
let dirNum = 0;
let time = 0;
let satisfied = false;

for (let i = 0; i < arr.length; i++) {
    let dir = arr[i];
    if (dir === "R") {
        dirNum = (dirNum + 1) % 4;
    } else if (dir === "L") {
        dirNum = (dirNum + 3) % 4;
    } else if (dir === "F") {
        x = x + dx[dirNum]; y = y + dy[dirNum];
    }
    time++;

    if (x === 0 && y === 0) {
        satisfied = true;
        break;
    }
}

if (satisfied) {
    console.log(time);
} else {
    console.log(-1);
}