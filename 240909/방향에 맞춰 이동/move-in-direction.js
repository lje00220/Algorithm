const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let dx = [-1, 0, 0, 1]; let dy = [0, -1, 1, 0];
let dirString = ["W", "S", "N", "E"];

let [x, y] = [0, 0];

for (let i = 1; i < input.length; i++) {
    let [dir, dist] = input[i].trim().split(" ");
    dist = Number(dist);

    dirNum = dirString.findIndex((x) => x === dir);

    x += (dx[dirNum] * dist);
    y += (dy[dirNum] * dist);
}

console.log(x, y);