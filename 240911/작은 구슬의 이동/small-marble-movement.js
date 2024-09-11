const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, t] = input[0].trim().split(" ").map(Number);
let [r, c, d] = input[1].trim().split(" ");
r = Number(r); c = Number(c); 

let mapper = {
    "R": 0,
    "U": 1,
    "L": 2,
    "D": 3
};

let dx = [0, -1, 0, 1], dy = [1, 0, -1, 0];

let cDir = mapper[d];

function inRange(x, y) {
    return x > 0 && x <= n && y > 0 && y <= n;
}

for (let i = 0; i < t; i++) {
    let nx = r + dx[cDir], ny = c + dy[cDir];

    if (!inRange(nx, ny)) {
        cDir = (cDir + 2) % 4;
        continue;
    }

    r = r + dx[cDir]; c = c + dy[cDir];    
    // console.log(r, c);
}

console.log(r, c);