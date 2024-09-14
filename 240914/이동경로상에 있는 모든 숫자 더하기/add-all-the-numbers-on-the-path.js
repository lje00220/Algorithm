const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, t] = input[0].trim().split(" ").map(Number);
let order = input[1].trim().split("");
let arr = [];

for (let i = 2; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
}

let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
let dirNum = 0;
let x = parseInt(n / 2), y = parseInt(n / 2);
let result = arr[x][y];

for (let elem of order) {
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if (elem === "R") {
        dirNum = (dirNum + 1) % 4;
    } else if (elem === "L") {
        dirNum = (dirNum + 3) % 4;
    } else if (elem === "F" && inRange(nx, ny)) {
        x += dx[dirNum], y += dy[dirNum];
        result += arr[x][y];
    }
}

console.log(result);

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}