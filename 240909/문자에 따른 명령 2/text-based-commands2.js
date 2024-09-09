const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");

let dx = [1, 0, -1, 0]; let dy = [0, -1, 0, 1];
let dirNum = 3;

let [x, y] = [0, 0];

for (let i = 0; i < input.length; i++) {
    let dir = input[i];
    if (dir === "L") {
        dirNum = (dirNum + 3) % 4;
    } else if (dir === "R") {
        dirNum = (dirNum + 1) % 4;
    } else {
        x += dx[dirNum]; y += dy[dirNum];
    }
}

console.log(x, y);